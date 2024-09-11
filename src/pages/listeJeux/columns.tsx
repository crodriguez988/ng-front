import { Fab } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

import styles from "./ListeJeux.module.css";

export const columns: GridColDef[] = [
    { 
      field: 'ranking', 
      headerName: 'Ranking', 
      flex: 1,
      disableColumnMenu: true,
      align: 'center',
      headerAlign: 'center',
      headerClassName: 'header',
  
      renderCell: (params) => (
        <div className={`titre ${styles.rank}`}>
          {params.value}
        </div>
      )
    },
    {
      field: 'nom',
      headerName: 'Nom',
      flex: 4,
      disableColumnMenu: true,
      headerAlign: 'center',
      headerClassName: 'header',
  
      renderCell: (params) => (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
          <Link to={`/jeuInfos/${params.row.id}`}>
            <img
             src={`${import.meta.env.VITE_PUBLIC_URL}/${params.row.imageUrl}`}
             alt={`image(${params.value})`}
              className={styles.imageJeu}
            />
          </Link>
          <Link to={`/jeuInfos/${params.row.id}`}>
            <div className={styles.nomJeu}>
              <div className='titre'>{params.value}</div>
              <div>{params.row.dateSortie}</div>
              <div>{params.row.eveloppeur}</div>
            </div>
          </Link>
        </div>
      ),
    },
    { 
      field: 'note', 
      headerName: 'Note', 
      flex: 1, 
      disableColumnMenu: true, 
      align: 'center',
      headerAlign: 'center',
      headerClassName: 'header',
      
      renderCell: (params) => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <p className={`titre ${styles.noteFont}`}>{params.value} </p>
        </div>
      ),
    },
    { 
      field: 'addList', 
      headerName: 'Ajouter à ma liste', 
      flex: 1.2, 
      disableColumnMenu: true, 
      align: 'center',
      headerAlign: 'center',
      headerClassName: 'header',
  
      renderCell: () => (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon sx={{ width: 24, height: 24 }}/>
          </Fab>
        </div>
      ),
    },
  ];