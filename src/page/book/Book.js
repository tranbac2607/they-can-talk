import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import styles from './Book.module.scss';

const Book = () => {
    useEffect(() => {
        document.title = "they can talk — book";
    });

    return (
        <>
            <Link to='/book' className={styles.title}>book</Link>
            <p className={styles.description}>
                They Can Talk’s first book is now available! Featuring 100 comics, including 40 exclusive ones that you won’t see anywhere else.  The hardcover book is a must-have for fans and it makes the perfect gift for any animal-lover.
            </p>
            <h3 className={styles.linkBuys}>It’s now available here:</h3>
            <ul>
                <li className={styles.linkBuyItem}>
                    <a className={styles.link} href=''>AMAZON</a>
                </li>
                <li className={styles.linkBuyItem}>
                    <a className={styles.link} href=''>BARNES AND NOBLE</a>
                </li>
            </ul>
            <img className={styles.bookImg} src='./images/book1.jpg' alt='book1'></img>
        </>
    )
}

export default Book
