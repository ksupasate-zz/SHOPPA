import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { style } from '@mui/system'
import { useCookies } from 'react-cookie';
import { Card } from "antd";
import { height } from "@mui/system";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Image, Avatar, Grid } from '@mui/material';
import Op from '../comps/operatorBill';

export default function Profile() {
    const [cookies, setCookie, removeCookie] = useCookies(['Member', 'Admin']);
    if (cookies['Member']) {
        const data = cookies['Member']
    }
    else if (cookies['Admin']) {
        const data = cookies['Admin']
    }
    const { Meta } = Card;
    const [profileDetail, setProfileDetail] = useState([]);
    useEffect(() => {
        fetch('/api/profile/' + data).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setProfileDetail(data)
        })
    }, []);

    const [profileDetail2, setProfileDetail2] = useState([]);
    useEffect(() => {
        fetch('/api/reviewScore/' + data).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setProfileDetail2(data)
        })
    }, []);

    const [profileDetail3, setProfileDetail3] = useState([]);
    useEffect(() => {
        fetch('/api/ProductQuan/' + data).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setProfileDetail3(data)
        })
    }, []);

    const [profileProduct, setProfileProduct] = useState([]);
    useEffect(() => {
        fetch('/api/ProfileProduct/' + data).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setProfileProduct(data)
        })
    }, []);
    const [profileBill, setProfileBill] = useState([]);
    useEffect(() => {
        fetch('/api/ProfileBill/' + data).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setProfileBill(data)
        })
    }, []);
    return (
        <div className={styles.profile}>
            {/* {console.log(profileDetail[0])} */}
            <img src='default.png' />
            <h4>{
                (profileDetail[0]) ?
                    profileDetail[0].Member_FName + " " + profileDetail[0].Member_LName : 'Loading...'
            }</h4>
            <p>{
                (profileDetail[0]) ?
                    profileDetail[0].Member_Address : 'Loading...'
            }</p>
            <div className={styles.profileDetail}>
                <div className={styles.profileLeft}>
                    {<h4>{(profileDetail3.length > 0 && profileDetail3[0].CP) ? profileDetail3[0].CP : "-"}</h4>}
                    <p>Products</p>
                </div>
                <div className={styles.profileRight}>
                    {<h4>{(profileDetail2.length > 0 && profileDetail2[0].RS) ? profileDetail2[0].RS : "-"}</h4>}
                    <p>Reviews</p>
                </div>
            </div>
            {
                (cookies['Member']) ?
                    <>
                        {/* <button onClick={Logout}>Logout</button> */}
                    </>
                    : ''
            }
           
            {(profileProduct.length > 0) ?
                 profileProduct.map((row, i) => (
                    <div>
                        <br />
                        <Link href={"/ProductCard?id=" + row.Product_ID}>
                            <Card
                                className={styles.card}
                                hoverable
                                style={{ width: 300, height: 200 }}
                                cover={
                                    <img
                                        alt="example"
                                        src={row.Product_Image}
                                    />
                                }
                            >
                                <Meta title={row.Product_Name} description={row.Product_Price + " ฿"} />
                            </Card>
                        </Link>
                    </div>
                )) : ''
            }

            {(profileBill.length > 0) ?
                <Container align="center"  >
                    <Grid container
                        direction="row"
                        alignItem='flex-start'
                        justifyContent='flex-start'>
                        <Grid item xs={12}>
                            <TableContainer component={Paper} sx={{ maxWidth: 1200, borderRadius: '16px' }}  >
                                <Table size="small" aria-label="customized table">
                                    <TableBody >
                                        <br/>
                                        {profileBill.map((row, i) => (
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
                                                <TableCell align="center">{row.Bill_ID}</TableCell>
                                                <TableCell align="center">{row.Bill_Date}</TableCell>
                                                <TableCell align="center" ><Link href={"/Bill?id=" + row.Member_ID}  ><Op/></Link></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Container> : ''
            }


        </div>
    )
}