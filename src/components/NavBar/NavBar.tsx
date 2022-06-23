import { NavLink } from 'react-router-dom';

const navConfig = [
    {
        id: 'shop',
        title: 'Shop',
        link: '/shop',
    },
    {
        id: 'test',
        title: 'Test',
        link: '/test',
    },
];

const NavBar = () => {
    return (
        <nav className="flex justify-between">
            {navConfig.map(({ link, title }) => (
                <NavLink
                    key={title}
                    to={link}
                    style={({ isActive }) => {
                        return {
                            display: 'block',
                            margin: '1rem',
                            color: isActive ? 'red' : '',
                        };
                    }}
                >
                    {title}
                </NavLink>
            ))}
        </nav>
    );
};

export default NavBar;
