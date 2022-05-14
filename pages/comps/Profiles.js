import React , { useState , useEffect } from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { style } from '@mui/system'
import { useCookies } from 'react-cookie';

export default function Profile() {
    const [cookies, setCookie , removeCookie] = useCookies(['Member' , 'Admin']);
    if(cookies['Member']){
        const data = cookies['Member']
    }
    else if(cookies['Admin']){
        const data = cookies['Admin']
    }

    const [profileDetail, setProfileDetail] = useState([]);
    useEffect(() => {
        fetch('/api/profile/' + data).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setProfileDetail(data) 
        })
    }, []);



    return (
        <div className={styles.profile}>
            {console.log(profileDetail[0])}
            <img src='default.png'/>
            <h4>{
            (profileDetail[0])?
                profileDetail[0].Member_FName + " " + profileDetail[0].Member_LName:'Loading...'
            }</h4>
            <p>{
            (profileDetail[0])?
                profileDetail[0].Member_Address:'Loading...'
            }</p>
            <div className={styles.profileDetail}>
                <div className={styles.profileLeft}>
                    <h4>21</h4>
                    <p>Products</p>
                </div>
                <div className={styles.profileRight}>
                    <h4>4.5</h4>
                    <p>Reviews</p>
                </div>
            </div>
            {
                (cookies['Member'])?
                <>
                    <p></p>
                    {/* <button onClick={Logout}>Logout</button> */}
                </>
                :''
            }
        </div>
    )
}