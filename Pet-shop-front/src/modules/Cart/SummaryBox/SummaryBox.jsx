import FormForOrder from '../ClientForm/ClientForm';
import css from './SummaryBox.module.css';

const SummaryBox = ({ entriesCount, total, onOrder }) => {
    const itemCount = Number.isFinite(entriesCount) ? entriesCount : 0;
    const totalAmount = total ?? '0.00';

    return (
        <aside className={css.container}>
        <h2 className={css.heading}>Order Summary</h2>
        <p className={css.info}>{itemCount} items</p>
        <div className={css.totalBlock}>
            <span className={css.label}>Total</span>
            <span className={css.value}>${totalAmount}</span>
        </div>
        <FormForOrder onOrder={onOrder} />
        </aside>
    );
};

export default SummaryBox;


