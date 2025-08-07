import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const navConfig = [
    {
        id: 'shop',
        title: 'Shop',
        translation: 'tr_shop',
        link: '/shop',
    },
    {
        id: 'test',
        title: 'Test',
        translation: 'tr_test',
        link: '/test',
    },
    {
        id: 'activity',
        title: 'Activity',
        translation: 'tr_activity',
        link: '/activity',
    },
];

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center">
            {navConfig.map(({ link, title, translation }) => (
                <NavLink
                    key={title}
                    to={link}
                    style={({ isActive }) => {
                        return {
                            display: 'block',
                            margin: '0 1rem',
                            color: isActive ? 'red' : '',
                        };
                    }}
                >
                    <FormattedMessage id={translation} />
                </NavLink>
            ))}
        </nav>
    );
};

export default NavBar;
