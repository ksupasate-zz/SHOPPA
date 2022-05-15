import Head from 'next/head'
import IconButton from '@mui/material/IconButton';
import styles from '/styles/Home.module.css'
import { ClassNames } from '@emotion/react';
import EditIcon from '@mui/icons-material/Edit';

import Link from "next/link";

export default function Image123({id}) {
    return (
        <div >


            <IconButton aria-label="EditIconn" >

                    <EditIcon />

                </IconButton>

        </div>
    )
}