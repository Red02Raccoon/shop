import { useNavigate } from 'react-router-dom';
import { NavBar } from '../NavBar';

import styles from './Header.module.scss';

const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div className={styles.header}>
            <div onClick={handleLogoClick}>Header</div>

            <NavBar />
        </div>
    );
};

export default Header;
