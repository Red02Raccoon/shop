import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CartButton from './CartButton';

describe('<CartButton/>', () => {
    const props = {
        count: 5,
        onCartOpen: jest.fn(),
    };

    it('should display correct count', async () => {
        const { container } = render(<CartButton {...props} />);

        expect(screen.getByTestId('cart-count').textContent).toEqual(String(props.count));
        expect(screen.getByTitle(props.count)).toBeInTheDocument();
        expect(
            container.querySelector('sup.ant-scroll-number.ant-badge-count')?.textContent
        ).toEqual(String(props.count));
    });

    it('should not display count element if value is not passed', async () => {
        render(<CartButton {...props} count={undefined} />);

        expect(screen.getByTestId('cart-count').textContent).toEqual('');
    });

    it('should handle `onCartOpen`', async () => {
        render(<CartButton {...props} />);

        await userEvent.click(screen.getByRole('button'));

        expect(props.onCartOpen).toHaveBeenCalledTimes(1);
    });
});
