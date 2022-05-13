import Card from '@mui/material/Card';
import styles from "../styles/Home.module.css";
import BasicSelect from "./comps/selectCate";
import * as React from 'react';
import { useCallback } from 'react'

import { CardContent, Grid, TextField, Button, createTheme, ThemeProvider, Typography  } from '@mui/material';
import { Component } from 'react';
export default function register() {

  const clickMe = useCallback((e) => {
    e.preventDefault();
    console.log(e)

    const upproduct = {
      productName : e.target[0].value ,
      productDetail : e.target[4].value ,
      productImage : e.target[2].value ,
      productCategory : e.target[7].value,
      productQuantity : e.target[9].value ,
      productPrice : e.target[11].value,
        //  Email : e.target[10].value ,
        //  Address : e.target[12].value ,
        //  Password : e.target[15].value ,
        //  ConPassword : e.target[17].value , 
    }
    console.log(upproduct)
      fetch('/api/api_product' , {
        method: 'POST',
        body: JSON.stringify({ upproduct }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        return res.json()
    })
        .then((upproduct) => {
          alert(upproduct.message)
          console.log(upproduct.message)
    })
} , []) 

    return(
        <main className={styles.main}>
            <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}} >
                <CardContent >
                <Typography gutterBottom variant="h4">Publish Product</Typography>
                    <form action="" method="post" onSubmit = {clickMe}>

                   
                    <Grid container spacing={1}>
                        
                        <Grid xs = {12} item>
                            <TextField  label = "Product Name" name = "productName" placeholder= "Enter product name" variant="outlined" fullWidth required/>
                        </Grid>
                        {/* <Grid xs={1.5} item>
                        
                        <UploadButtons ></UploadButtons>
                        </Grid> */}
                        <Grid xs = {12} item>
                            <TextField  type="URL" label = "URL photo" name = "productImage" placeholder= "Enter URL photo" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                        <TextField  type="text" name = "productDetail" multiline rows="4" label = "Product Details" placeholder= "Enter product detail " variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                        <BasicSelect ></BasicSelect>
                        </Grid>
                        <Grid xs={12} item>
                        <TextField type="number" InputProps={{ inputProps: { min: 1 } }}  name = "productQuantity" label = "Product Quantity" placeholder= "Enter product quantity" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                        <TextField type="number" InputProps={{ inputProps: { min: 1 } }}  name = "productPrice" label = "Product Price" placeholder= "Enter product price" variant="outlined" fullWidth required/>
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