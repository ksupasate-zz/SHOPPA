import styles from "../styles/Home.module.css";
import BasicSelect from "./component/select";
import RecipeReviewCard from "./component/card";
import DirectionStack from "./component/stack";
import Navbar from "./component/nav";



export default function seller() {
    return (
        <main className={styles.main}>
            <Navbar></Navbar>
            <BasicSelect></BasicSelect>
            <br></br> 
            <div className={styles.floatLeft}>
            <RecipeReviewCard></RecipeReviewCard>
            </div>
            <div className={styles.floatLeft}>
            <RecipeReviewCard></RecipeReviewCard>
            </div>
            <div className={styles.floatLeft}>
            <RecipeReviewCard></RecipeReviewCard>
            </div>
            <div className={styles.floatLeft}>
            <RecipeReviewCard></RecipeReviewCard>
            </div>
            
            
        </main>
    );
}