import * as React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import { Pagination, PaginationItem, Stack, TablePagination, Grid } from '@mui/material';
import UI from '@mui/material';
import styles from '/styles/Home.module.css'
import Op from './comps/operatorBill'
import Nav from './comps/NavbarAdmin'



export default function TableBillStatus() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setrows] = React.useState([]);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };



  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  React.useEffect(() => {
    fetch('/api/BillList')
      .then((res) => res.json())
      .then((result) => {
        setrows(result)
      })
  }, [])

  function change(_id) {
    if (confirm("Change Bill Status?")) {
      fetch('/api/BillLog/' + _id)
        .then((res) => res.json())
        .then((result) => {
          //setrows(result)
        })
      window.location.href = window.location.href
    }
    else {

    }
  }

  return (
    <main>
      <Stack sx={{ p: 4 }}>
        <Nav />
      </Stack>
      <div>
        <div className={styles.Membermargin}>Bill</div>
        <Container alignItems="left" className={styles.margin123} >
          <Grid container
            direction="row"
            alignItem='flex-start'
            justifyContent='flex-start'>
            <Grid item xs={12}>
              <TableContainer sx={{ minWidth: 1000, borderRadius: '16px' }}  >
                <Table >
                  <TableHead  >
                    <TableRow >
                      <TableCell>No</TableCell>
                      <TableCell align="left">Bill ID</TableCell>
                      <TableCell align="left">Order ID</TableCell>
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
                          <TableCell align="left">{i + 1}</TableCell>
                          <TableCell align="left">{row.Bill_ID}</TableCell>
                          <TableCell align="left">{row.Order_ID}</TableCell>
                          <TableCell align="center" onClick={() => change(row.Bill_ID)}>{<Op />}</TableCell>
                          <TableCell ><div className={(row.Bill_Status == '0') ? styles.status1 : styles.status}>{(row.Bill_Status == '0') ? 'Pending...' : 'Success!!!'}</div></TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
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