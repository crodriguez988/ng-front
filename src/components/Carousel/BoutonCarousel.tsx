import { Button, ButtonProps, styled } from "@mui/material";

export const BoutonCarousel = styled(Button)<ButtonProps>(() => ({
    backgroundColor: 'black',
    boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    '&:hover': {
      backgroundColor: '#403a39',
    },
  }));