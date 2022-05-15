import Card from '@mui/material/Card';
import { CardContent, Grid, TextField, Button, createTheme, ThemeProvider, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from '/styles/Creditcard.module.css';
import { useCallback } from 'react';
import { useCookies } from 'react-cookie';

const Confirm = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['Member', 'Cart']);


  const theme = createTheme({
    palette: {
      neutral: {
        main: '#673ab7',
        contrastText: '#fff',
      },
    },
  });
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <main className={styles.popup}>
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px", borderRadius: '16px' }} >
        <CardContent >
          <Typography gutterBottom variant="h4">CONFIRM YOUR ORDER</Typography>
          <Typography gutterBottom variant="h6">Do you want to buy this order ?</Typography>
          <form action="" method="post" onSubmit={clickMe}>
            <Grid container spacing={1}>
              <Grid xs={6} item container alignItems="center">
                <ThemeProvider theme={theme}>
                  <Button type="submit" variant='contained' color='neutral' fullWidth>Submit</Button>
                </ThemeProvider>
              </Grid>
              <Grid xs={6} item>
                <ThemeProvider theme={theme}>
                  <Button type="submit" variant='outlined' color='neutral' fullWidth onClick={handleCloseClick}>Cancel</Button>
                </ThemeProvider>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </main>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}

export default Confirm;





















