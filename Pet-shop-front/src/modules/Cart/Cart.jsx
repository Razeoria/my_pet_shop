import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import CartProductItem from './CartProductItem/CartProductItem';
import CartVoid from './CartVoid/CartVoid';
import FlexBox from '../../shared/components/FlexBox/FlexBox';
import SummaryBox from './SummaryBox/SummaryBox';
import ModalWin from './ModalWin/ModalWin';

import {
    removeItem,
    increaseAmount,
    decreaseAmount,
    resetCart,
    } from '../../shared/state/cartSlice';

    const Cart = () => {
    const dispatch = useDispatch();
    const { entries, totalCount } = useSelector(state => state.cart);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    if (!entries || totalCount === 0) {
        return <CartVoid />;
    }

    const totalCost = Object.values(entries).reduce((sum, { product, amount }) => {
        const price = product.discont_price ?? product.price;
        return sum + price * amount;
    }, 0);

    const changeQuantity = (id, prev, next) => {
        const step = next - prev;
        const action = step > 0 ? increaseAmount : decreaseAmount;
        for (let i = 0; i < Math.abs(step); i++) {
        dispatch(action(id));
        }
    };

    const triggerModal = () => setIsPopupVisible(true);
    const closeAndReset = () => {
        setIsPopupVisible(false);
        dispatch(resetCart());
    };

    return (
        <FlexBox>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 2 }}>
            {Object.values(entries).map(({ product, amount }) => (
            <li key={product.id}>
                <CartProductItem
                product={product}
                quantity={amount}
                onQuantityChange={(val) =>
                    val > 0 && changeQuantity(product.id, amount, val)
                }
                onRemove={() => dispatch(removeItem(product.id))}
                />
            </li>
            ))}
        </ul>

        <SummaryBox
            total={totalCost.toFixed(2)}
            entriesCount={totalCount}
            onOrder={triggerModal}
        />

        <ModalWin isOpen={isPopupVisible} onClose={closeAndReset} />
        </FlexBox>
    );
};

export default Cart;




