import Card from '@mui/material/Card';
import styles from "../styles/Home.module.css";

import { CardContent, Grid, TextField, Button, createTheme, ThemeProvider , Typography } from '@mui/material';
export default function register() {
    return(
        <main className={styles.main}>
            <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}} >
                <CardContent >
                    <Typography gutterBottom variant="h4">Sign In</Typography>
                    <form>

                   
                    <Grid container spacing={1}>
                        <Grid xs={12} item>
                        <TextField type="email" label = "Email" placeholder= "Enter email address" variant="outlined" fullWidth required/>
                        </Grid>
                        <Grid xs={12} item>
                        <TextField type="password" label = "Password" placeholder= "Enter password" variant="outlined" fullWidth required/>
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