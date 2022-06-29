import { Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import styles from './CartButton.module.scss';

const warnCount = 10;

interface Props {
    count?: number;
    onCartOpen: () => void;
}

const CartButton: React.FC<Props> = ({ count = 0, onCartOpen }) => (
    <Badge count={count} data-testid="cart-count">
        <Button
            className={count > warnCount ? styles.buttonActive : styles.button}
            type="primary"
            icon={<ShoppingCartOutlined />}
            size={'large'}
            onClick={onCartOpen}
        />
    </Badge>
);

export default CartButton;
