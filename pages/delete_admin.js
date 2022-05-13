import Card from '@mui/material/Card';
import styles from "../styles/Home.module.css";

import { CardContent, Grid, TextField, Button, createTheme, ThemeProvider , Typography } from '@mui/material';
export default function register() {
    return(
        <main className={styles.main}>
            <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}} >
                <CardContent >
                    <Typography gutterBottom variant="h4">Delete Account</Typography>
                    <form>

                   
                    <Grid container spacing={1}>
                        <Grid xs={12} item>
                        <ThemeProvider theme={theme}>
                        <Button type="submit" variant='contained' color='neutral' fullWidth>Submit</Button>
                        </ThemeProvider>
                        </Grid>
                        <Grid xs={12} item>
                        <ThemeProvider theme={theme}>
                        <Button type="cancel" variant='outlined' color='neutral' fullWidth>Cancel</Button>
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