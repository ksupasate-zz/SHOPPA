import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.fix960}>
      <div className={styles.slide}>
        <img src='https://tinyurl.com/yxp65vwr' className='img-fluid w-100  ' alt='test'></img>
      </div>
      <h4>Wowza007</h4>
    </div>
  )
}
