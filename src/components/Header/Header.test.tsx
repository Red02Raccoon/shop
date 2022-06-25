import { ReactNode } from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';

function renderWithRouter(component: ReactNode) {
    const history = createMemoryHistory();

    return {
        ...render(
            <Router location={history.location} navigator={history}>
                {component}
            </Router>
        ),

        history,
    };
}

describe('<Header/>', () => {
    it('should display correct logo text', () => {
        renderWithRouter(<Header />);

        expect(screen.getByTestId('logo').textContent).toEqual('Header');
    });

    it('should navigate to root page after pressing logo', async () => {
        const { history } = renderWithRouter(<Header />);

        await userEvent.click(screen.getByTestId('logo'));

        expect(history.location.pathname).toBe('/');
    });
});
