
import * as React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar} from '@mui/material';
import { Pagination, PaginationItem, Stack, TablePagination} from '@mui/material';
import UI from '@mui/material';
import styles from '../styles/Home.module.css'
import Op from '../component/button'
import Nav from '../component/Navbar'
import { Main } from 'next/document';

export default function TableBan() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setrows] = React.useState([]);// Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  React.useEffect(()=>{
    fetch('http://localhost:3001/Members')
      .then((res) => res.json())
      .then((result) => {
        setrows(result)
      })
  },[])
  return (
    <main>
      <Stack sx={{ p: 4 }}>
        <Nav />
      </Stack>
      <div>
        <div className={styles.Membermargin}>Members </div>
        <Container alignItems="left" className={styles.margin123} >
          <TableContainer component={Paper} sx={{ minWidth: 1400, borderRadius: '16px'}}  >
            <Table >
              <TableHead  >
                <TableRow >
                  <TableCell>Profile</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Telephone</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Operation</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody >
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                        backgroundColor: (i % 2 == 1) ? '#E9E9FF' : '#f5f5fc',
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Avatar alt="Remy Sharp" src={row.Member_Image} sx={{ width: 65, height: 65 }} />
                      </TableCell >
                      <TableCell align="left">{row.Member_FName+' '+ row.Member_LName}</TableCell>
                      <TableCell align="left">{row.Member_Telephone}</TableCell>
                      <TableCell align="center">{row.Member_Email}</TableCell>
                      <TableCell align="center" ><Op /></TableCell>
                      <TableCell ><div className={(row.Member_BanStatus == '0') ? styles.status : styles.status1}>{(row.Member_BanStatus == '0')? 'Active' : 'Ban'}</div></TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
        <br></br>
        <Stack alignItems="center" >
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Stack>
      </div>
    </main>
  );
}