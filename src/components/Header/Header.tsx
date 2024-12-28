import React from 'react';
import styles from "./Header.module.css"
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>React & Next.js</h1>
            <nav className={styles.nav}>
                <Link href="/">Home &rarr;</Link>
                <Link href="/produtos">Produtos &rarr;</Link>
                <Link href="/tecnologias">Tecnologias &rarr;</Link>
            </nav>
        </header>
    );
}

export default Header;
