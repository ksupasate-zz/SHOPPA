import React from 'react'
import Link from 'next/link'
import styles from '/styles/Product.module.css';
import { style } from '@mui/system'
import { useState , useEffect } from 'react';
export default function Profile({children}) {

    const [profileDetail, setProfileDetail] = useState([]);
    let data
    if(children){
        data = children
        // console.log(data)
    }
    
    React.useEffect(() => {
        if(!data) return
        fetch('/api/profile/' + data).then((res) => {
            return res.json()
        }).then((data) => {
            // console.log(data)
            setProfileDetail(data) 
        })
    }, [data]);

    const [profileDetail2, setProfileDetail2] = useState([]);
    useEffect(() => {
        fetch('/api/reviewScore/'+ data).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setProfileDetail2(data)
        })
    }, [data]);

    const [profileDetail3, setProfileDetail3] = useState([]);
    useEffect(() => {
        fetch('/api/ProductQuan/'+ data).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
            setProfileDetail3(data)
        })
    }, [data]);

    // console.log(profileDetail)
    return (
        <div className={styles.profile}>
            <img src={(profileDetail.length > 0)?profileDetail[0].Member_Image:''}/>
            <h4>{(profileDetail.length > 0)?profileDetail[0].Member_FName + " " + profileDetail[0].Member_LName:''}</h4>
            <p>{(profileDetail.length > 0)?profileDetail[0].Member_Address:''}</p>
            <div className={styles.profileDetail}>
                <div className={styles.profileLeft}>
                    { <h4>{(profileDetail3.length>0 && profileDetail3[0].CP)? profileDetail3[0].CP:"-"}</h4> }
                    <p>Products</p>
                </div>
                <div className={styles.profileRight}>
                { <h4>{(profileDetail2.length>0 && profileDetail2[0].RS) ? profileDetail2[0].RS:"-"}</h4> }
                    <p>Reviews</p>
                </div>
            </div>
        </div>
    )
}