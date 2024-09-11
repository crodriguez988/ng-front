import { useEffect, useState } from "react";
import JeuxJson from "../../JSON/jeux.json";

export const useFetchJeux = () => {
    const [jeux, setJeux] = useState<any[]>([]); 

    useEffect(() => {
        const chargerJeux = async () => {
          // Utilisation future de l'API pour charger les jeux
          /* const jeuxInstances = await fetchJeux();
          const transformedRows = jeuxInstances.map((jeu: Jeu) => ({
            id: jeu.id, 
            rank: jeu.ranking,
            nom: jeu.nom,
            note: jeu.note,
            imageUrl: jeu.imageUrl,
            dateSortie: jeu.dateSortie,
            studioDev: jeu.studiosDev.map(studio => studio.nom).join(', ')
          }));
          setJeux(transformedRows); */
          setJeux(JeuxJson);
        };
    
        chargerJeux();
      }, [jeux]);
    return jeux;
}