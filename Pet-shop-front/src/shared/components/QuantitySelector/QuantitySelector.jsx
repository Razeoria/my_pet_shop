import styles from './QuantitySelector.module.css';

const QuantitySelector = ({ qty = 1, onChange }) => {
    const decrease = () => {
        const newQty = Math.max(1, qty - 1);
        onChange(newQty);
    };

    const increase = () => {
        const newQty = qty + 1;
        onChange(newQty);
    };

    return (
        <div className={styles.selector}>
        <button className={styles.button} onClick={decrease}>–</button>
        <span className={styles.value}>{qty}</span>
        <button className={styles.button} onClick={increase}>+</button>
        </div>
    );
};

export default QuantitySelector;


