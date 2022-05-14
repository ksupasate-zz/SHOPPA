import React from 'react'
import Link from 'next/link'
import styles from '/styles/Product.module.css';
import { style } from '@mui/system'
export default function Profile() {
    return (
        <div className={styles.profile}>
            <img src='https://www.w3schools.com/w3css/img_lights.jpg'/>
            <h4>Tanasead Rattanapan</h4>
            <p>Bangkok , Thailand</p>
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
        </div>
    )
}