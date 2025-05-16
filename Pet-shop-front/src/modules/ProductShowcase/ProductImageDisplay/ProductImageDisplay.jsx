import { useState, useEffect } from 'react';
import styles from './ProductImageDisplay.module.css';

const SERVER_URL = 'http://localhost:3333';

const ProductImageDisplay = ({ imageList = [] }) => {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (imageList.length > 0) {
      const fullUrl = SERVER_URL + imageList[0];
      setActiveImage(fullUrl);
    }
  }, [imageList]);

  if (!activeImage) return null;

  return (
    <section className={styles.container}>
      <img
        src={activeImage}
        alt="Product preview"
        className={styles.image}
      />
    </section>
  );
};

export default ProductImageDisplay;

