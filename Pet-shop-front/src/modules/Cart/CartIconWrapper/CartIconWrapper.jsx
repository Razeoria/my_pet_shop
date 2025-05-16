import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartIcon } from '../../../assets/icons/Icons';
import styles from './CartIconWrapper.module.css';

const CartIconWrapper = () => {
  // Получаем общее количество товаров в корзине из Redux
    const totalCount = useSelector((state) => state.cart.totalCount);

    return (
        <Link to="/cart" className={styles.cart}>
        <CartIcon />
        {totalCount > 0 && (
            <span className={styles.discountTag}>{totalCount}</span>
        )}
        </Link>
    );
};

export default CartIconWrapper;
