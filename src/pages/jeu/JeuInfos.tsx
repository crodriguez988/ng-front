import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useParams } from "react-router-dom";
import { Developpeur } from "../../model/Developpeur";

import '../../styles/global/fonts-global.css';
import '../../styles/global/images-global.css';
import styles from "./JeuInfos.module.css";
import { useFetchJeuById } from "../../hooks/jeux/useFetchJeuById";

const JeuInfos = () => {
    const { id } = useParams();
    const { jeu, error } = useFetchJeuById(id);

    if (error) {
        return <div>{error}</div>;
    }

    if (!jeu) {
        return <div>Jeu non trouvé</div>;
    }

    const imageUrl = `${import.meta.env.VITE_PUBLIC_URL}/${jeu.imageUrl}`;
    return (
    <>
        <main className="padding">
            <Grid>
                <p className="titre">
                    {jeu.nom}
                </p>
            </Grid>
            <Grid container item className={styles.container} md={12}>
                <Grid item xs={4} md={3}>
                    <img className="imageJeu" src={imageUrl} alt="Description de l'image 3"/>
                </Grid>
                <Grid item xs={5} md={5} className="center-text">
                    <p className="bold titre">
                        Classement global
                    </p>
                    <p className={styles.infosBdd}>
                        #1
                    </p>
                    <div>
                        <p className="bold titre">Status du jeu :</p>
                        <FormControl className={styles.statusJeu}>
                            <InputLabel id="demo-simple-select-label">Status</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Status">
                                <MenuItem value={"Afaire"}>À faire</MenuItem>
                                <MenuItem value={"EnCours"}>En cours</MenuItem>
                                <MenuItem value={"Termine"}>Terminé</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={3} md={4} className="center-text">
                    <p className="bold titre">
                        Note de la communauté
                    </p>
                    <p  className={styles.infosBdd}>
                        9.5 / 10
                    </p>
                    <p>
                        (x xxx utilisateurs)
                    </p>
                    <div>
                        <p className="bold titre">Ma note</p>
                        <p className={styles.infosBdd}>9.5 / 10</p>
                    </div>
                </Grid>
            </Grid>
            <article>
                <h2 className="titre">Synopsis</h2> 
                <p className={`${styles.synopsis} ${styles.infosBdd}`}>
                    {jeu.synopsis}
                </p>
            </article>
            <Grid container className={styles.containerOthers} >
                <Grid item xs={12} md={12}>
                    <span className="bold titre">Même franchise</span>
                </Grid>
                <Grid item xs={12} md={6} className="center-text">
                    <p>
                        <span className="bold titre">Date de sortie</span>
                        <span className={styles.infosBdd}>
                            {jeu.dateSortie}
                        </span>
                    </p>
                </Grid> 
                <Grid item xs={12} md={6}>
                    <p>
                        <span className="bold titre">Développeur(s) : </span>
                        {jeu.developpeur.map((dev: Developpeur, index: number) => (
                        <span key={index} className={styles.infosBdd}>
                            {dev.nom}{index < jeu.developpeur.length - 1 && ", "}
                        </span>
                        ))}
                    </p>
                </Grid>
                <Grid item xs={12} md={6}>
                    <p>
                        <span className="bold titre">Editeur(s) : </span>
                        <span className={styles.infosBdd}>{jeu.editeurs.join(", ")} </span>
                    </p>
                </Grid>
                <Grid item xs={12} md={6}>
                    <p>
                        <span className="bold titre"> Plateforme(s) : </span>
                        <span className={styles.infosBdd}>{jeu.plateformes.join(", ")}</span>
                    </p> 
                </Grid>
                <Grid item xs={12} md={6}>
                    <p>
                        <span className="bold titre"> Genre(s) : </span>
                        <span className={styles.infosBdd}>{jeu.genres.join(", ")}</span>
                    </p>
                </Grid>
            </Grid>
        </main>
    </>
  );
}

export default JeuInfos;