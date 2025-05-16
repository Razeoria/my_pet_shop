import css from './TickControl.module.css';
import { TickIcon } from '../../../assets/icons/Icons';

const TickControl = ({ checked, onChange, label }) => {
    return (
        <label className={css.container}>
        <span className={css.label}>{label}</span>
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className={css.input}
        />
        <span className={css.visualBox}>
            <TickIcon className={css.tick} />
        </span>
        </label>
    );
};

export default TickControl;

