import Card from '@mui/material/Card';
import styles from "../styles/Home.module.css";
import * as React from 'react';
import { useCallback } from 'react'

import { CardContent, Grid, TextField, Button, createTheme, ThemeProvider, Typography  } from '@mui/material';
import { Component } from 'react';
import BasicRating from './comps/star'
export default function Comment() {

  const clickMe = useCallback((e) => {
    e.preventDefault();
    console.log(e)

    const upcomment = {
      rating : e.target[0].value ,
      commentProduct : e.target[2].value ,
    //   productImage : e.target[2].value ,
    //   productCategory : e.target[7].value,
    //   productQuantity : e.target[9].value ,
    //   productPrice : e.target[11].value,
        //  Email : e.target[10].value ,
        //  Address : e.target[12].value ,
        //  Password : e.target[15].value ,
        //  ConPassword : e.target[17].value , 
    }
    console.log(upcomment)
      fetch('/api/api_comment' , {
        method: 'POST',
        body: JSON.stringify({ upcomment }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        return res.json()
    })
        .then((upcomment) => {
          alert(upcomment.message)
          console.log(upcomment.message)
    })
} , []) 

    return(
        <main className={styles.main}>
            <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}} >
                <CardContent >
                <Typography gutterBottom variant="h4">Reviews Product</Typography>
                    <form action="" method="post" onSubmit = {clickMe}>

                   
                    <Grid container spacing={1}>
                        
                        <Grid xs={12} item>
                        <BasicRating></BasicRating>
                        </Grid>
                        <Grid xs={12} item>
                        <TextField  type="text" name = "commentProduct" multiline rows="4" label = "Comment Product" placeholder= "Enter comment product detail " variant="outlined" fullWidth required/>
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