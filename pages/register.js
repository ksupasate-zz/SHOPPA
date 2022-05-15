import Card from '@mui/material/Card'
import styles from "../styles/Home.module.css"
import { useCallback } from 'react'
import Link from 'next/link'
import BasicSelect from ".//comps/select";
import { CardContent, Grid, TextField, Button, createTheme, ThemeProvider, Typography } from '@mui/material';
import { useCookies } from 'react-cookie';

export default function register() {
    const [setCookie] = useCookies(['Member', 'Admin']);
    const clickMe = useCallback((e) => {
        console.log(e)
        const data = {
            FName: e.target[0].value,
            LName: e.target[2].value,
            DOB: e.target[4].value,
            Gender: e.target[6].value,
            Phone: e.target[8].value,
            Email: e.target[10].value,
            Address: e.target[12].value,
            Password: e.target[15].value,
            ConPassword: e.target[17].value,
        }
        console.log(data)
        if (data.Password != data.ConPassword) {
            alert("Password is not match")
            return
        }
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: { 'Content-Type': 'application/json' },
        }).then((res) => {
            return res.json()
        }).then((data) => {
            setCookie('Member', data.id, { path: '/' })
            alert(data.message)
            window.location.replace("./profile");
            console.log(data.message)
        })
    }, [])

    return (
        <main className={styles.main}>
            <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }} >
                <CardContent >
                    <Typography gutterBottom variant="h4">Sign Up</Typography>
                    <form action="" method="post" onSubmit={clickMe}>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="First Name" name="FName" placeholder="Enter first name" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Last Name" name="LName" placeholder="Enter last name" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="date" name="DOB" label="Date of birth" placeholder="Enter email address" variant="outlined" fullWidth />
                            </Grid>
                            <Grid xs={12} item>
                                <BasicSelect></BasicSelect>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="number" name="Phone" label="Phone" placeholder="Enter phone number" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="email" name="Email" label="Email" placeholder="Enter email address" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="text" name="Address" multiline rows="4" label="Address" placeholder="Enter address " variant="outlined" fullWidth />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="password" name="Password" label="Create password" placeholder="Enter password" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <TextField type="password" name="ConPassword" label="Confirm password" placeholder="Enter confirm password" variant="outlined" fullWidth required />
                            </Grid>

                            <Grid xs={12} item>
                                <Link href="/login" replace>
                                    <a>Login</a>
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