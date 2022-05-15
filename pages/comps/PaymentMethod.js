import styles from '/styles/PaymentMethod.module.css';
import Creditcard from './Creditcard'
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function PaymentMethod({ setCardNumber }) {
  const [cookies, setCookie, removeCookie] = useCookies(['Member']);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter()
  let id
  if (cookies['Member']) {
    id = cookies['Member']
  }
  // console.log("Member ID : "+id)
  const [data, setdata] = React.useState({});
  React.useEffect(() => {
    fetch('/api/Credit/' + id)//ProductList+(id=P...)
      .then((res) => res.json())
      .then((result) => {
        setdata(result)
        console.log(data)
      })
  }, [id])

  if (data.length > 0 && setCardNumber) {
    setCardNumber(data[0].Card_ID)
  }

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.paymentmethod}>
          <span>Select Payment method</span>
          <span className={styles.add}>
            <span className={styles.click} onClick={() => setShowModal(true)}><u>ADD</u></span>
            <Creditcard
              onClose={() => setShowModal(false)}
              show={showModal}
            >
            </Creditcard>
          </span>
        </div>
        <div className={styles.visa}>
          <span>Visa</span> <span>{(data.length > 0) ? data[0].Card_Number : ''}</span>
          <span className={styles.edit}><u>Edit</u></span>
        </div>
      </div>
    </div>

  )
}