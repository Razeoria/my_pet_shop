import styles from './CartProductItem.module.css';
import CloseIcon from '../../../assets/icons/CloseIcon';
import QuantitySelector from '../../../shared/components/QuantitySelector/QuantitySelector';

const BASE_API = import.meta.env.VITE_API_URL || 'http://localhost:3333';

function CartProductItem({ product, quantity, onQuantityChange, onRemove }) {
    if (!product?.id) return null;

    const { id, title, image, price, discont_price: discount } = product;

    const hasDiscount = discount !== undefined && discount !== null;
    const actualPrice = hasDiscount ? discount : price;

    const totalCurrent = actualPrice * quantity;
    const totalOriginal = price * quantity;

    const handleRemove = () => onRemove(id);

    return (
        <article className={styles.itemCard}>
        <img
            className={styles.productImage}
            src={`${BASE_API}${image}`}
            alt={`Product: ${title}`}
        />

        <div className={styles.cont}>
            <header className={styles.itemInfo}>
            <h3 className={styles.itemTitle}>{title}</h3>
            <button
                onClick={handleRemove}
                aria-label="Remove item"
                style={{ marginLeft: 16, background: 'transparent', border: 'none' }}
            >
                <CloseIcon />
            </button>
            </header>

            <div className={styles.itemPrice}>
            <QuantitySelector qty={quantity} onChange={onQuantityChange} />
            <span>${totalCurrent.toFixed(2)}</span>
            {hasDiscount && (
                <span className={styles.itemOldPrice}>${totalOriginal.toFixed(2)}</span>
            )}
            </div>
        </div>
        </article>
    );
}

export default CartProductItem;





