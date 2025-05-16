import { useState } from 'react';
import styles from './InfoPanel.module.css';

const InfoPanel = ({ text = '' }) => {
    const [expanded, setExpanded] = useState(false);
    const preview = text.slice(0, 500);
    const isLong = text.length > 500;

    return (
        <div className={styles.panel}>
        <h5 className={styles.header}>Details</h5>
        <p className={styles.content}>
            {expanded ? text : preview + (isLong ? '…' : '')}
        </p>
        {isLong && (
            <button
            type="button"
            onClick={() => setExpanded(prev => !prev)}
            className={styles.toggle}
            >
            {expanded ? 'Show less' : 'Read more'}
            </button>
        )}
        </div>
    );
};

export default InfoPanel;



