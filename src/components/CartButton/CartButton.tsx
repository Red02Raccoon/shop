import { Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import styles from './CartButton.module.scss';

interface IProps {
    count: number;
    onCartOpen: () => void;
}

const CartButton: React.FC<IProps> = ({ count, onCartOpen }) => {
    return (
        <Badge count={count}>
            <Button
                className={styles.button}
                type="primary"
                icon={<ShoppingCartOutlined />}
                size={'large'}
                onClick={onCartOpen}
            />
        </Badge>
    );
};

export default CartButton;
