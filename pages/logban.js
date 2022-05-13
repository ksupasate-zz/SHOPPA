import Card from '@mui/material/Card';
import styles from "../styles/Home.module.css";
import BasicSelect from "./comp/selectBan";
import * as React from 'react';
import { useCallback } from 'react'

import { CardContent, Grid, TextField, Button, createTheme, ThemeProvider, Typography  } from '@mui/material';
import { Component } from 'react';
export default function register2() {

    const clickMe2 = useCallback((e) => {
        e.preventDefault();
        console.log(e)
    
        const upLog = {
          banType : e.target[0].value ,
          Comment : e.target[2].value ,
        }
        console.log(upLog)
          fetch('/api/api_insert' , {
            method: 'POST',
            body: JSON.stringify({ upLog }),
            headers: { 'Content-Type': 'application/json' },
          })
          .then((res) => {
            return res.json()
        })
            .then((upLog) => {
              alert(upLog.message)
              console.log(upLog.message)
        })
    } , []) 
    
    return(
        <main className={styles.main}>
            <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}} >
                <CardContent >
                <Typography gutterBottom variant="h4">Ban Details</Typography>
                    <form action="" method="post" onSubmit = {clickMe2}>

                   
                    <Grid container spacing={1}>
                        <Grid xs={12} item>
                        <BasicSelect></BasicSelect>
                        </Grid>
                        <Grid xs={12} item>
                        <TextField type="text" name = "Comment" multiline rows="4" label = "Comment" placeholder= "Enter comment " variant="outlined" fullWidth/>
                        </Grid>
                        <Grid xs={12} item>
                        <ThemeProvider theme={theme}>
                        <Button type="submit" variant='contained' color='neutral' fullWidth>Submit</Button>
                        </ThemeProvider>
                        </Grid>
                        
                    </Grid>
                    </form>
                        
                    
                </CardContent>
            </Card>
        </main>
        
    );
}

const theme = createTheme({
    palette: {
      neutral: {
        main: '#673ab7',
        contrastText: '#fff',
      },
    },
  });