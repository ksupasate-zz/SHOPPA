import React from "react";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.footer}>
          <div className={styles.table}>
        <table>
          <tr>
            <th className={styles.head}>BUY</th>
            <th className={styles.head}>SELL</th>
            <th className={styles.head}>CUSTOMER SUPPORT</th>
          </tr>
          <tr>
            <td><a className={styles.td} href="#">Buyer Manual</a></td>
            <td><a className={styles.td} href="#">Seller Manual</a></td>
            <td><a className={styles.td} href="#">Help Center</a></td>
          </tr>
          <tr>
             <td><a className={styles.td} href="#">Authentication</a></td>
             <td><a className={styles.td} href="#">Seller Tier</a></td>
             <td><a className={styles.td} href="#">FAQ</a></td>
          </tr>
          <tr>
            <td><a className={styles.td} href="#">Sasom Services</a></td>
            <td><a className={styles.td} href="#">Sasom Product Guideline</a></td>
            <td><a className={styles.td} href="#">Contact Us</a></td>
          </tr>
        </table>
        <hr className={styles.linedes}></hr>
        </div>
        <div className={styles.last}>
        <p className={styles.td}>&copy; 2022 COPYRIGHT | SHOPPA</p>
        <p className={styles.td}>Term & Condition</p>
        <p className={styles.td}>Privacy Policy</p>
        </div>
      </div>
    </main>
  );
}
