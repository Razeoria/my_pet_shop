import styles from "./FlexBox.module.css";

const FlexBox = ({ children }) => {
    return <div className={styles.flex}>{children}</div>;
};

export default FlexBox;
