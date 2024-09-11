import React, { useState } from "react";
import { AppBar, Box, InputBase, styled, Toolbar } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import data from '../../../JSON/jeux.json';  
import { Link } from "react-router-dom";

import styles from './searchBar.module.css';

interface Jeu {
  nom: string;
  id: number;  
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  display: 'flex',
  margin: '0 auto',
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  color: "black",
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  width: '250px',
  maxWidth: '800px',  
  [theme.breakpoints.up('sm')]: {
    width: '400px',           
  },        
  [theme.breakpoints.up('md')]: {
    width: '600px',           
  },
  [theme.breakpoints.up('lg')]: {
    width: '800px',           
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchBar = () => {
  const [input, setInput] = useState<string>("");
  const [filteredGames, setFilteredGames] = useState<Jeu[]>([]);

  const recherche = (event: React.ChangeEvent<HTMLInputElement>) => {
    const jeuCherche = event.target.value;
    setInput(jeuCherche);

    const listeFiltre = data.filter((jeu: Jeu) =>
      jeu.nom.toLowerCase().includes(jeuCherche.toLowerCase())
    );

    setFilteredGames(jeuCherche === "" ? [] : listeFiltre);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <AppBar 
          position="static" 
          sx={{ 
            backgroundColor: 'transparent', 
            boxShadow: 'none', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
        >
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Rechercher..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={recherche}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        {input && filteredGames.length > 0 && (
          <div className={styles.searchContainer}>
            <ul className={styles.resultData}>
              {filteredGames.map((game, index) => (
                <li key={index} className={`titre ${styles.resultItem}`}>
                  <Link to={`/jeuInfos/${game.id}`}>
                    { game.nom} 
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;