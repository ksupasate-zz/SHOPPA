import * as React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Image, Avatar, ArrowBacklosIcon, ArrowForwardlosIcon } from '@mui/material';
import { Box, InputLabel, FormControl, NativeSelect } from '@mui/material';
import UI from '@mui/material';
import styles from '../styles/Home.module.css'
import Op from '../component/button'
import { borders } from '@mui/system';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import Sy from '../component/selectyear'
import Sm from '../component/selectmonth'
import Nav from '../component/Navbar';
function createData(Num, Cate, Image, Like) {
  return { Num, Cate, Image, Like };
}
const rows = [
  createData('1', 'Shoes', 'Shoes.png', '5230 Likes',),
  createData('2', 'Apparel', 'Apparel.png', '4750 Likes',),
  createData('3', 'Bags', 'Bags.png', '4583 Likes',),
  createData('4', 'Accessories', 'Acces.png', '3200 Likes',),
  createData('5', 'Collectibles', 'Collec.png', '2967 Likes',),
];
export default function TableFav() {
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
          <Container align="center" className={styles.margin123} >
            <TableContainer component={Paper} sx={{ minWidth: 1500, borderRadius: '16px' }}  >
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
                        {row.Num}
                      </TableCell>
                      <TableCell align="left">{row.Cate}</TableCell>
                      <TableCell align="left">
                        <Avatar variant="square" src={row.Image} sx={{ width: 50, height: 50 }} /></TableCell>
                      <TableCell align="center">{row.Like}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
          <br></br>
        </div>
      </Stack>
    </main>
  );
}