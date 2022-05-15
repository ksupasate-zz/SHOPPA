import styles from '/styles/SelectAddress.module.css';

export default function SelectAddress() {

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.address}>
          <span>Select Address</span>
          <span className={styles.add}><u>ADD</u></span>
        </div>
        <div className={styles.nameaddress}>
          <span>123 M.2 BKK</span>
          <span className={styles.edit}><u>Edit</u></span>
        </div>
      </div>
    </div>

  )
}