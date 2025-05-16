import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';
import navLinks from './navLinks';

function MainNavigation() {
    return (
        <nav>
        <ul className={styles.nav}>
            {navLinks.map((link) => (
            <li key={link.text}>
                <NavLink
                to={link.href}
                className={({ isActive }) =>
                    isActive ? styles.navLinkActive : styles.navLink
                }
                >
                {link.text}
                </NavLink>
            </li>
            ))}
        </ul>
        </nav>
    );
}

export default MainNavigation;

