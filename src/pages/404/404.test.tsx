import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderComponent as render } from 'utils';
import PageNotFound from './404';

describe('<PageNotFound/>', () => {
    it('should display Back Home button', () => {
        render(<PageNotFound />);

        expect(screen.getByRole('button', { name: 'Back Home' })).toBeInTheDocument();
    });

    it('should navigate to Home page', async () => {
        const { history } = render(<PageNotFound />);

        await userEvent.click(screen.getByRole('button', { name: 'Back Home' }));

        expect(history.location.pathname).toBe('/');
    });
});
