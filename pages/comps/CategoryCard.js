import Link from 'next/link';
import Image from 'next/image';
import styles from '/styles/CategoryCard.module.css';

const CategoryCard = () => {
    return (
        <div className={styles.main}>
            <Link href={`/Shoes`}>
            <div className={styles.card}>
                <Image className={styles.image} src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80" height={500} width={500} />
                    <div className={styles.center}>
                        <h3 className={styles.text}>Shoes</h3>
                    </div>
            </div>
            </Link>
            <Link href={`/Collectibles`}>
            <div className={styles.card}>
                <Image className={styles.image} src="https://images.unsplash.com/photo-1608581972267-fae7c22e61b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFudGlxdWVzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" height={500} width={500} />
                    <div className={styles.center}>
                        <h3 className={styles.text}>Collectibles</h3>
                    </div>
            </div>
            </Link>
            <Link href={`/Apparel`}>
            <div className={styles.card}>
                <Image className={styles.image} src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" height={500} width={500} />
                    <div className={styles.center}>
                        <h3 className={styles.text}>Apparel</h3>
                    </div>
            </div>
            </Link>
            <Link href={`/Bags`}>
            <div className={styles.card1}>
                <Image className={styles.image} src="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" height={500} width={500} />
                    <div className={styles.center}>
                        <h3 className={styles.text}>Bags</h3>
                    </div>
            </div>
            </Link>
            <Link href={`/Accessories`}>
            <div className={styles.card1}>
                <Image className={styles.image} src="https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2082&q=80" height={500} width={500} />
                    <div className={styles.center}>
                        <h3 className={styles.text}>Accessories</h3>
                    </div>
            </div>
            </Link>
        </div>
    );
};

export default CategoryCard;
