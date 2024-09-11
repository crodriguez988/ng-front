import Carousel from "react-multi-carousel";
import { responsive } from "./responsiveConfig";
import { Button, ButtonProps, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Jeu } from "../../model/Jeu";

import styles from "./carousel.module.css";
import { BoutonCarousel } from "./BoutonCarousel";

interface JeuxProps {
    jeux: Jeu[];
    titre: string;
  }

  const CarouselHome: React.FC<JeuxProps> = ({ jeux, titre }) => {
  const imageUrl = `${import.meta.env.VITE_PUBLIC_URL}`;
  
  return (
    <div className={styles.carouselContainer}>
      <BoutonCarousel variant="contained">{titre}</BoutonCarousel>
      <div className={styles.carouselDisplayGrid}>
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          showDots={false}
          ssr={true}
          autoPlay={false}
          keyBoardControl={true}
          transitionDuration={10}
          >
          {jeux.map((jeu) => (
            <>
              <div className={styles.slideContainer} key={jeu.id}>
                <Link to={`/jeuInfos/${jeu.id}`} className={styles.lienJeu}>
                  <img
                    className={styles.imageCarousel}
                    src={`${imageUrl}/${jeu.imageUrl}`}
                    alt={`Image de ${jeu.nom}`}
                  />
                </Link>
                <span className={styles.nomJeu}>{jeu.nom}</span>
              </div>
            </>
          ))}
        </Carousel>
      </div>
    </div>
    );
  };

export default CarouselHome;