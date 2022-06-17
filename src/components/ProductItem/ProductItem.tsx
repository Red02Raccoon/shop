import styles from "./ProductItem.module.scss";

interface IProps {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

const ProductItem: React.FC<IProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <div className={styles.product}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt={title} />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <h3 className={styles.description}>{description}</h3>

      <div className={styles.footer}>
        <p className={styles.price}>${price}</p>

        <button type="submit" className={styles.button}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
