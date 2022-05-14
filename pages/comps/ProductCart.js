import React from 'react'
import Image from 'next/image'
import styles from '/styles/ProductCart.module.css';
import Stack from "@mui/material/Stack";
import { useCookies } from "react-cookie"
var clicks = 0;

export function plus() {
  clicks++;
  // clicks = (clicks < 10) ? "0" + clicks : clicks;
  document.getElementById("clicks").innerHTML = clicks;
}

export function minus() {
  clicks--;
  clicks = (clicks <= 0) ? 0 : clicks;
  document.getElementById("clicks").innerHTML = clicks;
}
const [cookies, setCookie, removeCookie] = useCookies(['Cart']);

export default function ProductCart() {
  return (
    <div className="container-fluid">
      <div className='d-grid gap-4'>
        <div className={styles.box}>
          <div className={styles.posimg}>
            <Image className={styles.img} src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              width={80} height={80} />
          </div>
          <div className={styles.name}>
            <span>Nike Air Jordan</span>
          </div>
          <div className={styles.posbut}>
            <div className={styles.button}>
              <Stack direction="row" spacing={1}>
                <button className={styles.sub} type="button" onClick={minus}>
                  -
                </button>
                <a className={styles.val} id="clicks">
                  0
                </a>
                <button className={styles.add} type="button" onClick={plus}>
                  +
                </button>
                <div></div>
              </Stack>
            </div>
          </div>
          <div className={styles.price}>
            <span>5000</span> <br />
            <span>Bath</span>
          </div>
        </div>
      </div>
    </div>
  )
}





