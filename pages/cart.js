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
import { CreditCard, TransgenderTwoTone } from '@mui/icons-material';
import PaymentMethod from "./comps/PaymentMethod";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import BasicSelectBank from './comps/selectbankcomp';


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
  const [cookies, setCookie, removeCookie] = useCookies(['Member', 'Cart']);
  const Router = useRouter();
  React.useEffect(() => {
    if (!cookies['Member']) {
      Router.push('/login', { shallow: true })
    }
  }, []);
  const [showModal, setShowModal] = useState(false);
  const cart = cookies['Cart']
  console.log(cart)
  let a = 0, sum = 0, allqty = 0
  if (cookies['Cart']) {
    while (cookies['Cart'][a]) {
      sum += cookies['Cart'][a].price
      allqty += cookies['Cart'][a].qty
      a++
    }
  }

  if (cookies['Member']) {
    const data = cookies['Member']
  }

  const [profileDetail, setProfileDetail] = useState([]);
  useEffect(() => {
    fetch('/api/profile/' + data).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
      setProfileDetail(data)
    })
  }, []);
  console.log(profileDetail)

  const [CardNumber, setCardNumber] = useState(0);
  const [BranchBank, setBranchBank] = useState(0);

  function buyMePlz() {
    // console.log(CardNumber)
    // console.log(BranchBank)
    if (confirm("Are u sure about that")) {
      // alert("Yes")
      const finaldata = {
        CartItem: cookies['Cart'],
        Member_ID: cookies['Member'],
        Card_ID: CardNumber,
        BranchBank_ID: BranchBank,
        TotalAll: allqty,
      }
      // console.log(finaldata)
      fetch('/api/order', {
        method: 'POST',
        body: JSON.stringify({ finaldata }),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => {
        return res.json()
      }).then((finaldata) => {
        // removeCookie('Cart')
        Router.push('/profile')
      })
    } else {
      // alert("NO")
    }

    
  }

  return (
    <div>
      <div className={styles.bar}><Navbar /></div>
      {
        (cart) && cart.map((row, i) => {
          return (
            <>
              <div className="container-fluid" key={i}>
                <div className='d-grid gap-4'>
                  <div className={stylesProductCard.box}>
                    <div className={stylesProductCard.posimg}>
                      <img className={stylesProductCard.img} src={row.image}
                        width={80} height={80} />
                    </div>
                    <div className={stylesProductCard.name}>
                      <span>{row.name}</span>
                    </div>
                    <div className={stylesProductCard.posbut}>
                      <div className={stylesProductCard.button}>
                        <Stack direction="row" spacing={1}>
                          <button className={stylesProductCard.sub} type="button" onClick={minus}>
                            -
                          </button>
                          <a className={stylesProductCard.val} id="clicks">
                            {row.qty}
                          </a>
                          <button className={stylesProductCard.add} type="button" onClick={plus}>
                            +
                          </button>
                          <div></div>
                        </Stack>
                      </div>
                    </div>
                    <div className={stylesProductCard.price}>
                      <span>{row.price}</span> <br />
                      <span>Bath</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }
      {/* Product Card */}
      <aside className={styles.pos}>

        {/* Order Summary */}
        <div className={stylesOrdersum.box}>
          <div className={stylesOrdersum.name}>
            <span>Order summary</span>
          </div>
          <div className={stylesOrdersum.total}>
            <span>Sub total</span>
            <span className={stylesOrdersum.price}>{sum}</span> <span className={stylesOrdersum.unit}>Bath</span>
          </div>
          <div className={stylesOrdersum.delivery}>
            <span>Delivery fee</span>
            <span className={stylesOrdersum.fee}>{(sum * 0.07).toFixed(0)}</span> <span className={stylesOrdersum.unit}>Bath</span>
          </div>
          <hr className={stylesOrdersum.line} />
          <div className={stylesOrdersum.sum}>
            <span className={stylesOrdersum.price}>{(sum + sum * 0.07).toFixed(0)}</span> <span className={stylesOrdersum.unit}>Bath</span>
          </div>
        </div>

        {/* PaymentMethod */}
        <PaymentMethod setCardNumber={setCardNumber} />
        <BasicSelectBank setBranchBank={setBranchBank} />

        {/* Select Address */}
        <div className={stylesSelectAddress.box}>
          <div className={stylesSelectAddress.address}>
            <span>Select Address</span>
            <span className={stylesSelectAddress.add}><u>ADD</u></span>
          </div>
          <div className={stylesSelectAddress.nameaddress}>
            <span>{profileDetail.length > 0 && profileDetail[0].Member_Address}</span>
            <span className={stylesSelectAddress.edit}><u>Edit</u></span>
          </div>
        </div>
        <div>
          <button className={styles.add2cart} onClick={buyMePlz}>Submit</button>
        </div>
      </aside>
    </div>
  )
}