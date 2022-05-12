import React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { styled } from '@mui/material/styles';
import { deepPurple, purple } from '@mui/material/colors';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love snacks.');
  };

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This product has been added to cart', { variant });
  };

  return (
    <React.Fragment>
      <ColorButton variant="contained" onClick={handleClickVariant('success')}>Add to Cart</ColorButton>
    </React.Fragment>
  );
}

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[100],
  '&:hover': {
    backgroundColor: deepPurple[500],
  },
}));