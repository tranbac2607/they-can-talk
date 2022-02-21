import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
    useEffect(() => {
        document.title = "they can talk — contact";
    });

    return (
        <>
            <Link to='/contact' className={styles.title}>contact</Link>
            <ul>
                <li className={styles.contactItem}>
                    jimmyscraig (at) gmail.com
                </li>
                <li className={styles.contactItem}>
                    Business Inquiries / Management
                </li>
                <li className={styles.contactItem}>
                    Alison Mann -  mann@fourthwallmanagement.com
                </li>
            </ul>
        </>
    )
}

export default Contact
