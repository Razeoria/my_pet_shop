import { Link } from "react-router-dom";
import { useNavigationTrail } from "../../shared/hooks/useNavigationTrail";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
    const trail = useNavigationTrail();

    return (
        <nav className={styles.container} aria-label="Breadcrumb">
        <div className={styles.block}>
            {trail.map((item, index) => {
            const isLast = index === trail.length - 1;

            return (
                <span key={item.to} className={styles.breadcrumbItem}>
                {!isLast ? (
                    <>
                    <Link to={item.to} className={styles.navLink}>
                        {item.name}
                    </Link>
                    <div className={styles.separator}></div>
                    </>
                ) : (
                    <span className={styles.now}>{item.name}</span>
                )}
                </span>
            );
            })}
        </div>
        </nav>
    );
};

export default Breadcrumbs;



