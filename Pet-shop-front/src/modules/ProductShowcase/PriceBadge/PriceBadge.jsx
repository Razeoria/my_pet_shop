import styles from './PriceBadge.module.css';
import { computeDiscountPercent, resolveFinalPrice } from '../../../shared/utils/promoUtils';

const PriceBadge = ({ price, discont_price }) => {
    const finalPrice = resolveFinalPrice(price, discont_price);
    const discountPercent = computeDiscountPercent(price, discont_price);

    return (
        <div className={styles.row}>
        <span className={styles.current}>${finalPrice}</span>
        {discountPercent && (
            <>
            <span className={styles.old}>${price}</span>
            <span className={styles.tag}>-{discountPercent}%</span>
            </>
        )}
        </div>
    );
};

export default PriceBadge;
