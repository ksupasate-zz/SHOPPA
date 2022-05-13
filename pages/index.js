import Footer from "./comps/Footer"
import Navbar from "./comps/Navbar"
import styles from '/styles/Home.module.css';



export default function Home() {
  return (
    <div>
      
    <div className={styles.bar}><Navbar /></div>
   
  

    <Footer />  
    
    
    </div>
  )
}
