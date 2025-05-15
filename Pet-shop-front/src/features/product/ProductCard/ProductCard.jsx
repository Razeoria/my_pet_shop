import { Link } from "react-router-dom";
import { computeDiscountPercent } from "../../../shared/utils/promoUtils";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
    const { id, title, price, discont_price, image } = product;

    const discountPercent = computeDiscountPercent(price, discont_price);

    return (
        <div className={styles.wrapper}>
        <Link to={`/products/${id}`} className={styles.imageLink}>
            <img
            src={`http://localhost:3333${image}`}
            alt={title}
            className={styles.image}
            />
            {discountPercent > 0 && (
            <span className={styles.discountTag}>-{discountPercent}%</span>
            )}
        </Link>

        <div className={styles.content}>
            <Link to={`/products/${id}`} className={styles.title}>
            {title}
            </Link>

            <div className={styles.prices}>
            {discont_price ? (
                <>
                <span className={styles.price}>${discont_price}</span>
                <span className={styles.oldPrice}>${price}</span>
                </>
            ) : (
                <span className={styles.price}>${price}</span>
            )}
            </div>
        </div>
        </div>
    );
};

export default ProductCard;

