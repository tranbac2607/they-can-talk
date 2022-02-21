import { Link } from 'react-router-dom'
import clsx from 'clsx'
import styles from './HomeProduct.module.scss';

const HomeProduct = (props) => {
    return (
        <li className={styles.homeProductItem}>
            <Link to="/image">
                <img
                    className={styles.productImg}
                    src={props.urlImg}
                    alt={props.title}>
                </img>
            </Link>
            <h4 className={styles.prodcutTitle}>{props.title}</h4>
            <div className={styles.productFooter}>
                <span className={styles.productPublished}>{props.published}</span>
                <div className={styles.action}>
                    <i className={clsx(styles.actionIcon, "fal fa-share-square")}></i>
                    <i className={clsx(styles.actionIcon, "fab fa-facebook")}></i>
                    <i className={clsx(styles.actionIcon, "fas fa-heart")}></i>
                </div>
            </div>
        </li>
    )
}

export default HomeProduct
