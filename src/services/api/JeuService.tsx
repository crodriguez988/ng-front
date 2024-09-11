import { Jeu } from '../../model/Jeu';
import { Developpeur } from '../../model/Developpeur';

const URL_API = 'http://127.0.0.1:8080/jeux';
import jeuxJson from "../../JSON/jeux.json";

export const fetchJeux = async (): Promise<Jeu[]> => {
  try {
    const response = await fetch(URL_API);
    const jeuxData = await response.json();

    const jeuxInstances = jeuxData.map((jeuData: Jeu) => new Jeu(
      jeuData.id,
      jeuData.nom,
      jeuData.dateSortie,
      jeuData.note || 0,
      jeuData.imageUrl || '',
      jeuData.developpeur.map((dev: any) => new Developpeur(dev.id, dev.nom)),
      jeuData.editeurs || [],
      jeuData.genres || [],
      jeuData.plateformes || [],
      jeuData.ranking || 0,
      jeuData.synopsis || '',
      jeuData.multijoueur || false,
      jeuData.cooperatif || false,
      jeuData.solo || true,
      jeuData.goty || false
    ));

    return jeuxInstances;
  } catch (error) {
    console.error('Error fetching jeux:', error);
    return [];
  }
};

export const fetchJeu = async (id: string): Promise<Jeu | null> => { 
  try {
    const response = await fetch(`http://127.0.0.1:8080/jeux/${id}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du jeu');
    }
    const data = await response.json();
    
    const jeuInstance = new Jeu(
      data.id,
      data.nom,
      data.dateSortie,
      data.note,
      data.imageUrl,
      data.developpeur,
      data.editeurs,
      data.genres,
      data.plateformes,
      data.ranking,
      data.synopsis,
      data.multijoueur,
      data.cooperatif,
      data.solo,
      data.goty
    );
    
    return jeuInstance;
  } catch (error) {
    console.error('Erreur:', error);
    return null; 
  }
};

export const fetchJeuJson = (id: string) => {
  const idNumber = Number(id);

  const jeuTrouve = jeuxJson.find((jeu) => jeu.id === idNumber);

  return jeuTrouve || null;
}

export const fetchJeuxJsonByDate = (date: string) => {
  const jeuxTrouves = jeuxJson.filter((jeu) => {
    return jeu.dateSortie.includes(date); 
  });

  return jeuxTrouves;
}; 