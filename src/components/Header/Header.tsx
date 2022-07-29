import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { NavBar } from '../NavBar';
import { LanguageToggle } from '../LanguageToggle';

import styles from './Header.module.scss';

const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div className={styles.header}>
            <div className="logo" data-testid="logo" onClick={handleLogoClick}>
                <FormattedMessage id="tr_logo" />
            </div>

            <LanguageToggle />

            <NavBar />
        </div>
    );
};

export default Header;
