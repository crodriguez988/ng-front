import { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { fetchJeuxJsonByDate } from "../../services/api/JeuService";
import { Jeu } from '../../model/Jeu';
import { Developpeur } from '../../model/Developpeur';
import CarouselHome from '../../components/Carousel/CarouselHome';

const SortiesProchaines = () => {
  
  const [jeux, setJeux] = useState<Jeu[]>([]); 
  const date = "2023";
  const titre = "Sorties prochaines"

  useEffect(() => {
    const fetchAndSetJeux = async () => {
      try {
        const jeuxTrouves = fetchJeuxJsonByDate(date);

        const jeuxInstances = jeuxTrouves.map(
          (jeu) =>
            new Jeu(
              jeu.id,
              jeu.nom,
              jeu.dateSortie,
              jeu.note,
              jeu.imageUrl,
              jeu.developpeur.map(
                (dev) => new Developpeur(dev.id, dev.nom)
              ), 
              jeu.editeurs,
              jeu.genres,
              jeu.plateformes,
              jeu.ranking,
              jeu.synopsis,
              jeu.multijoueur,
              jeu.cooperatif,
              jeu.solo,
              jeu.goty
            )
        );

        setJeux(jeuxInstances);
        console.log(jeux)
      } catch (error) {
        console.error('Erreur lors de la récup des données', error);
      }
    };

    fetchAndSetJeux();
  }, [date]);

  return (
    <>
      <CarouselHome titre={titre} jeux={jeux} />
    </>
  );
}

export default SortiesProchaines;