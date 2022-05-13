import Footer from "./comps/Footer"
import Navbar from "./comps/Navbar"
import ProductCart from "./comps/ProductCart"
import Ordersum from "./comps/Ordersum"
import PaymentMethod from "./comps/PaymentMethod"
import SelectAddress from "./comps/SelectAddress"
import styles from '/styles/Cart.module.css';
import React from 'react'
import Image from 'next/image'
import Product from "./comps/Product"


export default function Cart() {

  return (
    <div>
      <div className={styles.bar}><Navbar /></div>
      <ProductCart />
      <ProductCart />
      <aside className={styles.pos}>
        <Ordersum />
        <PaymentMethod />
        <SelectAddress />
      </aside>
    </div>
  )
}