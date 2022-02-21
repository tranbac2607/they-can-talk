import { useState, useEffect } from 'react';
import styles from './Print.module.scss';
import PrintProduct from '../../components/print_product/PrintProduct';
import { getImages } from '../../utils/PrintImages';

const Print = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        document.title = "they can talk — prints";
        const result = getImages();
        setImages(result);
    }, []);

    return (
        <>
            <h3 className={styles.namePage}>prints</h3>
            <div className={styles.gridRowProduct}>
                {images && images.map((image, index) => (
                    <PrintProduct
                        key={index}
                        urlImg={image.url}
                        name={image.name}
                        price={image.price}
                    />
                ))}
            </div>
            <div className={styles.cart}>
                <i className="fal fa-shopping-bag"></i>
                <h5 className={styles.cartName}>Giỏ hàng</h5>
            </div>
        </>
    );
}

export default Print;
