import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CartButton from './CartButton';

describe('<CartButton/>', () => {
    const props = {
        count: 12,
        onCartOpen: jest.fn(),
    };

    it('should display correct count', async () => {
        render(<CartButton {...props} />);

        expect(screen.getByTestId('cart-count').textContent).toEqual(String(props.count));
    });

    it('should handle `onCartOpen`', async () => {
        render(<CartButton {...props} />);

        await userEvent.click(screen.getByRole('button'));

        expect(props.onCartOpen).toHaveBeenCalledTimes(1);
    });
});
