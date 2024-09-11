import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import '../../styles/global/fonts-global.css';
import { columns } from "./columns";
import { useFetchJeux } from '../../hooks/jeux/useFetchJeux';

const ListeJeux = () => {
  const jeux  = useFetchJeux();

  return (
    <div className="padding padding-lr">
      <Box
        sx={{
          height: '100%',
          width: '100%',
          overflowX: 'auto',
          '& .header': {
            backgroundColor: '#2c387e',
            color: 'white',
            fontSize: {
              xs: '15px',
              sm: '16px',
              md: '18px',
              lg: '24px',
            },
          },
        }}
      >
        <DataGrid
          rows={jeux}
          columns={columns}
          getRowHeight={() => 'auto'}
          disableColumnSorting
          disableRowSelectionOnClick
          sx={{
            boxShadow: 2,
            backgroundColor: '#f4f6f6',
          }}
        />
      </Box>
    </div>
  );
};

export default ListeJeux;