import Head from 'next/head'
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '../styles/Home.module.css'
import { ClassNames } from '@emotion/react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link";

export default function Image123() {
    return (
        <div >
            <div className={styles.space1} >

                <IconButton aria-label="VisibilityIcon" >
                <Link href="/Profile">
                    <VisibilityIcon />
                    </Link>
                </IconButton>
            </div>

            <IconButton aria-label="EditIconn">
                    <EditIcon />
                </IconButton>

            <div className={styles.space2}>
            <IconButton aria-label="DeleteIcon">
                    <DeleteIcon />
                </IconButton>
            </div>

        </div>
    )
}