import Navbar from "./comps/Navbar"
import styles from '/styles/Cart.module.css';
import Image from 'next/image'
import stylesProductCard from '/styles/ProductCart.module.css';
import stylesOrdersum from '/styles/Ordersum.module.css';
import Stack from "@mui/material/Stack";
import stylesPaymentMethod from '/styles/PaymentMethod.module.css';
import stylesSelectAddress from '/styles/SelectAddress.module.css';
import Creditcard from './comps/Creditcard'
import React, { useEffect, useRef, useState } from "react";
import { CreditCard } from '@mui/icons-material';
import PaymentMethod from "./comps/PaymentMethod";


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


export default function Cart() {

  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className={styles.bar}><Navbar /></div>
     
      {/* Product Card */}
      <div className="container-fluid">
        <div className='d-grid gap-4'>
          <div className={stylesProductCard.box}>
            <div className={stylesProductCard.posimg}>
              <Image className={stylesProductCard.img} src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                width={80} height={80} />
            </div>
            <div className={stylesProductCard.name}>
              <span>Nike Air Jordan</span>
            </div>
            <div className={stylesProductCard.posbut}>
              <div className={stylesProductCard.button}>
                <Stack direction="row" spacing={1}>
                  <button className={stylesProductCard.sub} type="button" onClick={minus}>
                    -
                  </button>
                  <a className={stylesProductCard.val} id="clicks">
                    0
                  </a>
                  <button className={stylesProductCard.add} type="button" onClick={plus}>
                    +
                  </button>
                  <div></div>
                </Stack>
              </div>
            </div>
            <div className={stylesProductCard.price}>
              <span>5000</span> <br />
              <span>Bath</span>
            </div>
          </div>
        </div>
      </div>

      <aside className={styles.pos}>
      
      {/* Order Summary */}
      <div className={stylesOrdersum.box}>
          <div className={stylesOrdersum.name}>
            <span>Order summary</span>
          </div>
          <div className={stylesOrdersum.total}>
            <span>Sub total</span> 
            <span className={stylesOrdersum.price}>10000</span> <span className={stylesOrdersum.unit}>Bath</span>
          </div>
          <div className={stylesOrdersum.delivery}>
            <span>Delivery fee</span> 
            <span className={stylesOrdersum.fee}>0</span> <span className={stylesOrdersum.unit}>Bath</span>
          </div>
          <hr className={stylesOrdersum.line}/>
          <div className={stylesOrdersum.sum}>
          <span className={stylesOrdersum.price}>10000</span> <span className={stylesOrdersum.unit}>Bath</span>
          </div>
        </div>

        {/* PaymentMethod */}
       <PaymentMethod />

      {/* Select Address */}
      <div className={stylesSelectAddress.box}>
          <div className={stylesSelectAddress.address}>
            <span>Select Address</span> 
            <span className={stylesSelectAddress.add}><u>ADD</u></span> 
          </div>
          <div className={stylesSelectAddress.nameaddress}>
            <span>123 M.2 BKK</span>
            <span className={stylesSelectAddress.edit}><u>Edit</u></span> 
          </div>
        </div>
      </aside>
    </div>
  )
}