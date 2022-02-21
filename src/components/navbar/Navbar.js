import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Navbar.module.scss';
import Search from '../search_modal/Search';


const Navbar = () => {

    const [click, setClick] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [showNavItem, setShowNavItem] = useState(true);


    const handeShowIcon = () => setClick(!click);
    const showNavbar = () => {
        if (window.innerWidth <= 660) {
            setShowNav(false);
            setShowNavItem(false);
        } else {
            setShowNav(true);
            setShowNavItem(true);
        }
    };

    const handleOpenModal = () => setClick(!click);

    useEffect(() => {
        showNavbar();
    }, []);

    window.addEventListener('resize', showNavbar);

    return (
        <>
            {<nav className={click ? clsx(styles.nav, styles.active) : styles.nav}>
                {showNavItem && <Link to='/' className={styles.navImage}></Link>}
                <ul className={styles.navList}>
                    <li>
                        {showNavItem || <Link className={styles.navItem} to='/'>home</Link>}
                    </li>
                    <li>
                        <Link className={styles.navItem} to='/prints'>prints</Link>
                    </li>
                    <li>
                        <Link className={styles.navItem} to='book'>book</Link>
                    </li>
                    <li>
                        <a className={styles.navItem} href=''>patreon</a>
                    </li>
                    <li>
                        <a className={styles.navItem} href=''>shirts</a>
                    </li>
                    <li>
                        <Link className={styles.navItem} to='contact'>contact</Link>
                    </li>
                    <li>
                        <Link className={clsx(styles.navItem, styles.navItem2)} to='Archive'>Archive</Link>
                    </li>
                    {showNavItem &&
                        <li
                            className={clsx(styles.navItem, styles.navItem2)}
                            onClick={handleOpenModal}
                        >
                            Search
                        </li>
                    }
                    <li>
                        <a className={clsx(styles.navItem, styles.navItem2)} href=''>RSS</a>
                    </li>
                </ul>
            </nav>}

            {showNav || <header className={click ? clsx(styles.navHeader, styles.active) : styles.navHeader}>
                <div className={styles.menuIcon} onClick={handeShowIcon}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </header>}
            {click && <Search />}
        </>
    );
}

export default Navbar
