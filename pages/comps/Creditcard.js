import Card from '@mui/material/Card';
import { CardContent, Grid, TextField, Button, createTheme, ThemeProvider, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from '/styles/Creditcard.module.css';
import { useCallback } from 'react';
import { useCookies } from 'react-cookie';

const Modal = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const [cookies, setCookie, removeCookie] = useCookies(['Member']);
  // console.log(cookies['Member'])
  const clickMe = useCallback((e) => {
    e.preventDefault();
    console.log(e)

    const upCredit = {
      Card_Name: e.target[0].value,
      Card_Number: e.target[2].value,
      VALID_THRU: e.target[4].value,
      CVC: e.target[6].value,
      Member_ID: cookies['Member'],
    }
    console.log(upCredit)
    fetch('/api/api_creditcard', {
      method: 'POST',
      body: JSON.stringify({ upCredit }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        return res.json()
      })
      .then((upCredit) => {
        alert("Success")
        console.log(upCredit.message)
        window.location.replace("./cart");
      })
  }, [])

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
          <Typography gutterBottom variant="h4">Card Information</Typography>
          <form action="" method="post" onSubmit={clickMe}>
            <Grid container spacing={1}>
              <a href="#" className={styles.close} onClick={handleCloseClick}>
                x
              </a>
              <Grid xs={12} item>
                <TextField label="Name on card" name="Card_Name" placeholder="Enter name on card" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField type="number" name="Card_Number" label="Card number" placeholder="Enter card number" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField label="Expiration Date" name="VALID_THRU" placeholder="Enter expiration Date" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <TextField type="password" name="CVC" label="CVC" placeholder="Enter CVC password" variant="outlined" fullWidth required />
              </Grid>
              <Grid xs={12} item>
                <ThemeProvider theme={theme}>
                  <Button type="submit" variant='contained' color='neutral' fullWidth>Submit</Button>
                </ThemeProvider>
              </Grid>
              <Grid xs={12} item>
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
};

export default Modal;