import css from './SortMenu.module.css';
import { DownIcon } from '../../../assets/icons/Icons';

const sortingOptions = [
    { value: 'default', label: 'By default' },
    { value: 'newest', label: 'Newest' },
    { value: 'priceDesc', label: 'Price: high to low' },
    { value: 'priceAsc', label: 'Price: low to high' },
    ];

    const SortMenu = ({ value, onChange, label }) => {
    return (
        <div className={css.container}>
        <span className={css.caption}>{label}</span>
        <select
            className={css.selector}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {sortingOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
                {opt.label}
            </option>
            ))}
        </select>
        <span className={css.arrow}>
            <DownIcon />
        </span>
        </div>
    );
};

export default SortMenu;
