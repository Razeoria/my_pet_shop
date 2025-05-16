import css from './BudgetFilter.module.css';

const BudgetFilter = ({ priceFrom, priceTo, onChange }) => {
    const handleMin = (e) => {
        const from = e.target.value !== '' ? Number(e.target.value) : 0;
        onChange(from, priceTo);
    };

    const handleMax = (e) => {
        const to = e.target.value !== '' ? Number(e.target.value) : Infinity;
        onChange(priceFrom, to);
    };

    return (
        <div className={css.container}>
        <span className={css.caption}>Price</span>
        <input
            type="number"
            placeholder="from"
            className={css.input}
            value={priceFrom === 0 ? '' : priceFrom}
            onChange={handleMin}
        />
        <input
            type="number"
            placeholder="to"
            className={css.input}
            value={isFinite(priceTo) ? priceTo : ''}
            onChange={handleMax}
        />
        </div>
    );
};

export default BudgetFilter;
