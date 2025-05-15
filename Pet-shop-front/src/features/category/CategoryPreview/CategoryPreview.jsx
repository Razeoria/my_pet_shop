import { Link } from "react-router-dom";
import styles from "./CategoryPreview.module.css";

const CategoryPreview = ({ data }) => {
    if (!data) return null;

    return (
        <Link to={`/categories/${data.id}`} className={styles.wrapper}>
        <div className={styles.imageContainer}>
            <img src={data.image} alt={data.title} className={styles.image} />
        </div>
        <h4 className={styles.name}>{data.title}</h4>
        </Link>
    );
};

export default CategoryPreview;
