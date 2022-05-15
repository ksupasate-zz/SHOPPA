import Head from "next/head"
import Navbar from "./comps/Navbar"
import Profiles from "./comps/Profiles"
import styles from "../styles/Home.module.css"
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from 'react'


export default function profile() {
    const [cookies, setCookie, removeCookie] = useCookies(['Member', 'Admin']);
    const Router = useRouter();
    React.useEffect(() => {
        if (!cookies['Member']) {
            Router.push('/login', { shallow: true })
        }
    }, []);

    function uploadProduct () {
        
    }


    return (
        <div className={styles.bar}>
            <Navbar />
            <Profiles />
           
        </div>
    )
}
