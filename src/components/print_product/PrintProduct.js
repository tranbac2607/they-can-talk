import styles from './PrintProduct.module.scss';

const PrintProduct = (props) => {
    return (
        <div className={styles.gridColumnProduct} >
            <div className={styles.prodcutItem}>
                <div className={styles.imgAndStatus}>
                    <img
                        className={styles.productImg}
                        src={props.urlImg}
                        alt={props.name}>
                    </img>
                    <div className={styles.productQuantity}>Hết hàng</div>
                </div>
                <h3 className={styles.productName}>{props.name}</h3>
                <h1 className={styles.producPrice}>{props.price}</h1>

            </div>
        </div>
    );
};

export default PrintProduct;
