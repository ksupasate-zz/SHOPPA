import Head from "next/head"
import Footer from "./comps/footer"
import Navbar from "./comps/Navbar"
import Profiles from "./comps/Profiles"
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import React, { useState, useEffect } from 'react'




export default function profile() {
    const [cookies, setCookie, removeCookie] = useCookies(['Member', 'Admin']);
    const Router = useRouter();
    React.useEffect(() => {
        if (!cookies['Member']) {
            Router.push('/login', {shallow:true})
        }
    }, []);
    
    return (
        <div>
            <Navbar />
            <Profiles />
        </div>
    )
}