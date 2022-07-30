import { Tag } from 'antd';
import { IProductItem, categories } from 'common';
import { FormattedMessage } from 'react-intl';

import styles from './ProductItem.module.scss';

interface IProps extends IProductItem {
    isAdded: boolean;
    onProductAdd: () => void;
}

const ProductItem: React.FC<IProps> = ({
    image,
    title,
    description,
    price,
    isAdded,
    category,
    onProductAdd,
}) => {
    const currentCategory = categories.find((item) => item.id === category);

    return (
        <div className={styles.product}>
            <div className={styles.imageWrapper}>
                <img className={styles.image} src={image} alt={title} />
            </div>

            <h3 className={styles.title}>{title}</h3>

            {currentCategory && (
                <Tag className={styles.category} color={currentCategory.color}>
                    <FormattedMessage id={currentCategory.title} />
                </Tag>
            )}

            <p className={styles.description}>{description}</p>

            <div className={styles.footer}>
                <p className={styles.price}>${price}</p>

                <button
                    type="submit"
                    className={isAdded ? styles.buttonActive : styles.button}
                    onClick={onProductAdd}
                >
                    <FormattedMessage id={isAdded ? 'tr_inCart' : 'tr_addToCart'} />
                </button>
            </div>
        </div>
    );
};

export default ProductItem;
