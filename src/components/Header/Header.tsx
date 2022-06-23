import { NavBar } from '../NavBar';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div>Header</div>

            <NavBar />
        </div>
    );
};

export default Header;
