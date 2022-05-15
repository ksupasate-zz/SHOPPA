import * as React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Image, Avatar, Grid } from '@mui/material';
import UI from '@mui/material';
import styles from '../styles/Home.module.css'
import Stack from '@mui/material/Stack';
import Sy from './comps/selectyear'
import Sm from './comps/selectmonth'
import Nav from './comps/NavbarAdmin';


export default function TableFav() {
  const [rows, setrows] = React.useState([]);
  React.useEffect(() => {
    fetch('/api/Favlist')
      .then((res) => res.json())
      .then((result) => {
        setrows(result)
      })
  }, [])
  return (
    <main >
      <Stack sx={{ p: 4 }}>
        <Nav />
        <div>
          <br />
          <br />
          <Stack direction="row" justifyContent="flex-start" alignItems="baseline" spacing={2} sx={{ ml: 20 }}>
            <div className={styles.Favyear}>Top 5 most favorite categoty:</div>
            < Sy />
          </Stack>
          <Stack direction="row" justifyContent="flex-start" alignItems="baseline" spacing={2} sx={{ ml: 20 }}>
            <div className={styles.Favyear}>Month: </div> <Sm />
          </Stack>
          <br />
          <Container align="center" className={styles.marginFav} >
            <Grid container
              direction="row"
              alignItem='flex-start'
              justifyContent='flex-start'>
              <Grid item xs={12}>
                <TableContainer component={Paper} sx={{ maxWidth: 1000, borderRadius: '16px' }}  >
                  <Table size="small" aria-label="customized table">
                    <TableBody >
                      {rows.map((row, i) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                            backgroundColor: (i % 2 == 1) ? '#E9E9FF' : '#fcf9ff',
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {i + 1}
                          </TableCell>
                          <TableCell align="center">{row.Category_Name}</TableCell>
                          <TableCell align="center">{row.countCate + ' Likes'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Container>
          <br></br>
        </div>
      </Stack>
    </main>
  );
}