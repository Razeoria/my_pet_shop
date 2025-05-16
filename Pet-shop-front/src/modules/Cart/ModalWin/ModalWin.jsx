import styles from "./ModalWin.module.css";
import CloseIcon from "../../../assets/icons/CloseIcon";

const ModalWin = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
    <div className={styles.backdrop} role="dialog" aria-modal="true">
        <div className={styles.modalBox}>
        <div className={styles.topBar}>
            <h2 className={styles.title}>Congratulations!</h2>
            <button onClick={onClose} className={styles.closePrimaryButton} aria-label="Close">
            <CloseIcon width={16} height={16} color="#fff" />
            </button>
        </div>
        <p className={styles.text}>Your order has been successfully placed on the website.</p>
        <p className={styles.text}>A manager will contact you shortly to confirm your order.</p>
        </div>
    </div>
    );
};

export default ModalWin;

