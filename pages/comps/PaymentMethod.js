import styles from '/styles/PaymentMethod.module.css';
import Creditcard from './Creditcard'
import React, { useEffect, useRef, useState } from "react";
import { CreditCard } from '@mui/icons-material';
export default function PaymentMethod() {
  
  const [showModal, setShowModal] = useState(false);

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
          <span>Visa</span> <span>12123***</span>
          <span className={styles.edit}><u>Edit</u></span>
        </div>
      </div>
    </div>

  )
}