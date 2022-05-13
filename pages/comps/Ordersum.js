import styles from '/styles/Ordersum.module.css';


export default function Ordersum() {

    return (
      <div>
        <div className={styles.box}>
          <div className={styles.name}>
            <span>Order summary</span>
          </div>
          <div className={styles.total}>
            <span>Sub total</span> 
            <span className={styles.price}>10000</span> <span className={styles.unit}>Bath</span>
          </div>
          <div className={styles.delivery}>
            <span>Delivery fee</span> 
            <span className={styles.fee}>0</span> <span className={styles.unit}>Bath</span>
          </div>
          <hr className={styles.line}/>
          <div className={styles.sum}>
          <span className={styles.price}>10000</span> <span className={styles.unit}>Bath</span>
          </div>
        </div>
      </div>

    )
}