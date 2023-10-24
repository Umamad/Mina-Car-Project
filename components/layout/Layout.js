import React from 'react';
import Link from 'next/link';
import styles from "../layout/layout.module.css";



const Layout = ({ children }) => {
    return (
        <>
        <header className={styles.header} >
            <Link href="/">
            <h2>MinaCar</h2> 
            <p>Choose and Buy Your Car</p>
            </Link>
        </header>

        <div className={styles.container}>
           {children}
        </div>

        <footer className={styles.footer}>
            <p>Powerd by <a href='#'>Mina</a> &copy;
            </p>
        </footer>
            
        </>
    );
};

export default Layout;