import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { NavBar } from '../NavBar';
import { LanguageToggle } from '../LanguageToggle';
import { withLog } from '../hoc';

import customStyles from './Header.module.scss';

const NewNavBar = withLog(NavBar);
const NewLanguageToggle = withLog(LanguageToggle);

interface Props {
    styles?: React.CSSProperties;
}

const Header: React.FC<Props> = ({ styles }) => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div className={customStyles.header} style={styles}>
            <div className="logo items-center" data-testid="logo" onClick={handleLogoClick}>
                <FormattedMessage id="tr_logo" />
            </div>

            <NewLanguageToggle canUseLogger />

            <NewNavBar canUseLogger />
        </div>
    );
};

export default Header;
