import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppLogo } from '../../../assets/icons/Icons.jsx';
import MainNavigation from '../../MainNavigation/MainNavigation';
import CartIconWrapper from '../../Cart/CartIconWrapper/CartIconWrapper.jsx';
import styles from './Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    return (
    <header className={styles.header}>
      {/* Мобильный хедер */}
        <div className={styles.mobileHeader}>
        <button className={styles.burger} onClick={toggleMenu}>☰</button>
        <Link to="/" className={styles.logoCenter}><AppLogo /></Link>
        <CartIconWrapper />
        </div>

      {/* Мобильное меню */}
        {isMenuOpen && (
        <nav className={styles.mobileMenu}>
            <MainNavigation />
        </nav>
        )}

      {/* Десктопный хедер */}
        <div className={styles.desktopHeader}>
        <Link to="/" className={styles.logoLeft}><AppLogo /></Link>
        <MainNavigation />
        <CartIconWrapper />
        </div>
    </header>
    );
};

export default Header;
