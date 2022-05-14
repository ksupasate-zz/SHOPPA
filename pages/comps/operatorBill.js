import Head from 'next/head'
import Image from 'next/image'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import styles from '/styles/Home.module.css'
import { ClassNames } from '@emotion/react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link";

export default function Image123({id}) {
    return (
        <div >
            

            <IconButton aria-label="EditIconn" >
            <Link href={"/BillForm?id="+id }>
                    <EditIcon />
                    </Link>
                </IconButton>
          
        </div>
    )
}