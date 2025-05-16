import { Link } from 'react-router-dom';
import PrimaryButton from '../../shared/components/PrimaryButton/PrimaryButton';
import styles from './HeroBanner.module.css';

function HeroBanner() {
    return (
        <section className={styles.banner}>
            <div className={styles.content}>
                <h1 className={styles.headline}>
                    Amazing Discounts <br /> on Pets Products!
                </h1>
                <div className={styles.PrimaryButtonWrapper}>
                    <Link to="/sales">
                        <PrimaryButton width="218px">Check out</PrimaryButton>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default HeroBanner;


