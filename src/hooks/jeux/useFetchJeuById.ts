// src/hooks/useFetchJeu.ts
import { useEffect, useState } from "react";
import { fetchJeuJson } from "../../services/api/JeuService"; 

export const useFetchJeuById = (id: string | undefined) => {
  const [jeu, setJeu] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadJeu = async () => {
      if (!id) {
        setError("Id non fourni");
        return;
      }

      try {
        const jeuInstance = await fetchJeuJson(id as string);
        setJeu(jeuInstance);
      } catch (error) {
        setError("Erreur lors du chargement du jeu");
        console.error(error);
      }
    };

    loadJeu();
  }, [id]);

  return { jeu, error };
};