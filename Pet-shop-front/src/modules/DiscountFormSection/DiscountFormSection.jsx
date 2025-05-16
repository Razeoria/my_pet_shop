import CouponForm from "./CouponForm";
import Container from "../../shared/components/Container/Container";
import styles from './DiscountFormSection.module.css';
import mainImage from '../../assets/images/image_main_form.png';

const DiscountFormSection = () => {
    return (
        <section className={styles.container}>
        <h3 className={styles.title}>5% off on the first order</h3>

        <div className={styles.flex}>
            <img
            src={mainImage}
            alt="Discount for new users"
            className={styles.img}
            />

            <CouponForm className={styles.form} />
        </div>
        </section>
    );
};

export default DiscountFormSection;
