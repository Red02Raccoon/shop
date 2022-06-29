import { Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import styles from './CartButton.module.scss';

const warnCount = 10;

interface IProps {
    count: number;
    onCartOpen: () => void;
}

/*istanbul ignore file */
const CartButton: React.FC<IProps> = ({ count, onCartOpen }) => {
    return (
        <Badge count={count}>
            <Button
                className={count > warnCount ? styles.buttonActive : styles.button}
                type="primary"
                icon={<ShoppingCartOutlined />}
                size={'large'}
                onClick={onCartOpen}
            />
        </Badge>
    );
};

export default CartButton;
