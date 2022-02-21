import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import clsx from 'clsx';
import styles from './Home.module.scss';
import HomeProduct from '../../components/home_products/HomeProduct';
import { getImages } from '../../utils/HomeImages';

const Home = () => {
    const FIRST_PAGE = 1;
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [images, setImages] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    const getCurrentPage = () => {
        if (id == undefined) return FIRST_PAGE;
        const page = Number.parseInt(id);
        return page <= 0 ? FIRST_PAGE : page;
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        document.title = "they can talk";
        const page = getCurrentPage();
        const result = getImages(page);
        setImages(result.data);
        setTotalPages(result.totalPages);
        setLoaded(true);
    }, [id]);

    const handleNextPage = () => {
        const page = getCurrentPage();
        navigate(`/page/${page + 1}`);
        scrollToTop();
    };

    const handlePrevPage = () => {
        const page = getCurrentPage();
        if (page - 1 == FIRST_PAGE) navigate('/');
        else navigate(`/page/${page - 1}`);
        scrollToTop();
    };

    return (
        <>
            {loaded && (
                <>
                    <div className={styles.products}>
                        <ul className={styles.productItem}>
                            {images && images.map((image, index) => (
                                <HomeProduct
                                    key={index}
                                    urlImg={image.url}
                                    title={image.title}
                                    published={image.date}
                                />
                            ))}
                        </ul>
                    </div>
                    <div div className={styles.changePage}>
                        <div className={styles.page} onClick={handlePrevPage}>
                            {getCurrentPage() != FIRST_PAGE && (
                                <>
                                    <i className={clsx(styles.changeIocn, "fas fa-angle-left")}></i>
                                    <span>Newer</span>
                                </>
                            )}
                        </div>
                        <div className={styles.page} onClick={handleNextPage}>
                            {getCurrentPage() < totalPages && (
                                <>
                                    <span>Older</span>
                                    <i className={clsx(styles.changeIocn, "fas fa-angle-right")}></i>
                                </>
                            )}
                        </div>
                    </div >
                </>
            )}
            <div className={styles.footer}>
                Hi, I'm Jimmy. This is a comic about animals.
            </div>
        </>
    );
}

export default Home;
