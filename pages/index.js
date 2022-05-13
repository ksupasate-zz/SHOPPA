import Footer from "./comps/Footer"
import Navbar from "./comps/Navbar"
import Main from "./comps/Main"
import styles from '/styles/Home.module.css';



export default function Home() {
  return (
    <div>
      
    <div className={styles.bar}><Navbar /></div>
   
    <Main/>

    <Footer />  
    
    
    </div>
  )
}
