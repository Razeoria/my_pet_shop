import { Link } from 'react-router-dom';
import ButtonMain from '../../../shared/components/PrimaryButton/PrimaryButton';
import css from './CartVoid.module.css';

const CartVoid = () => (
    <section className={css.wrapper}>
        <p className={css.message}>Your shopping cart is currently empty.</p>
        <Link to="/products">
        <ButtonMain width="313px">Continue Shopping</ButtonMain>
        </Link>
    </section>
);

export default CartVoid;
