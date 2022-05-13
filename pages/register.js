import Card from '@mui/material/Card';
import styles from "../styles/Home.module.css";
import BasicSelect from "./comps/select";

import { CardContent, Grid, TextField, Button, createTheme, ThemeProvider, Typography  } from '@mui/material';
import { Component } from 'react';
export default function register() {
    return(
        <main className={styles.main}>
            <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}} >
                <CardContent >
                <Typography gutterBottom variant="h4">Sign Up</Typography>
                    <form>

                   
                    <Grid container spacing={1}>
                        <Grid xs = {12} sm = {6} item>
                            <TextField label = "First Name" name = "firstName" placeholder= "Enter first name" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs = {12} sm = {6} item>
                            <TextField label = "Last Name" name = "lastName" placeholder= "Enter last name" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                        <TextField type="date" name = "DOB" label = "Date of birth" placeholder= "Enter email address" variant="outlined" fullWidth />
                        </Grid>
                        <Grid xs={12} item>
                        <BasicSelect></BasicSelect>
                        </Grid>
                        <Grid xs={12} item>
                        <TextField type="number" name = "phone" label = "Phone" placeholder= "Enter phone number" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                        <TextField type="email" name = "email" label = "Email" placeholder= "Enter email address" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                        <TextField type="text" name = "address" multiline rows="4" label = "Address" placeholder= "Enter address " variant="outlined" fullWidth/>
                        </Grid>
                        <Grid xs={12} item>
                        <TextField type="password" name = "password" label = "Create password" placeholder= "Enter password" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                        <TextField type="password" name = "conPassword" label = "Confirm password" placeholder= "Enter confirm password" variant="outlined" fullWidth required/>
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