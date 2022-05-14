import Card from '@mui/material/Card'
import styles from "../styles/Home.module.css"
import { useCallback } from 'react'
import Link from 'next/link'
import { CardContent, Grid, TextField, Button, createTheme, ThemeProvider, Typography } from '@mui/material';

import { useCookies } from 'react-cookie';

export default function login() {

    const [cookies, setCookie , removeCookie] = useCookies(['Member' , 'Admin']);

    const clickMe = useCallback((e) => {
        e.preventDefault();
        // console.log(e)
        const data = {
            Email: e.target[0].value,
            Password: e.target[2].value,
        }
        console.log(data)
        fetch('/api/loginAdmin', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            return res.json()
        }).then((data) => {
            if(data.check == "Admin"){
                setCookie('Admin' , data.id , {path : '/'})
                alert("Welcome back " + data.id)
                window.location.replace("./Ban");
            }else{
                alert("Please try again")
            }
            
            // console.log(data.results)
        })
    }, [])

    return (
        <main className={styles.main}>
        <Card style={{maxWidth:450, margin:"0 auto", padding:"20px 5px"}} >
            <CardContent >
                <Typography gutterBottom variant="h4">Login</Typography>
                <form onSubmit={clickMe} action="" method = "post">


                <Grid container spacing={1}>
                    <Grid xs={12} item>
                    <TextField type="email" name="email" label = "Email" placeholder= "Enter email address" variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid xs={12} item>
                    <TextField type="password" name="password" label = "Password" placeholder= "Enter password" variant="outlined" fullWidth required/>
                    </Grid>
                    <Grid xs={12} item>
                        <Link href="/register" replace>
                            <a>Register</a>
                        </Link>
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