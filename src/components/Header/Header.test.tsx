import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderComponent as render } from 'utils';
import Header from './Header';

describe('<Header/>', () => {
    it('should display correct logo text', () => {
        render(<Header />);

        expect(screen.getByTestId('logo').textContent).toEqual('Logo');
    });

    it('should navigate to root page after pressing logo', async () => {
        const { history } = render(<Header />);

        await userEvent.click(screen.getByTestId('logo'));

        expect(history.location.pathname).toBe('/');
    });

    it('Logo should match the snapshot', () => {
        render(<Header />);

        expect(screen.getByTestId('logo')).toMatchSnapshot();
    });
});
