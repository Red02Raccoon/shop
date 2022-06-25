import { render, screen } from '@testing-library/react';

import CartItem from './CartItem';

//NOTE: learn different assertions and selectors
describe('CartItem', () => {
    const props = {
        id: 12,
        title: 'test',
        description: 'test-description',
        image: '/test/img-1.png',
        price: 12,
    };

    it('should display remove button', () => {
        render(<CartItem {...props} />);

        const button = screen.getByRole('button', { name: 'Remove' });
        expect(button).toBeInTheDocument();

        const button2 = screen.getByRole('button');
        expect(button2).toHaveTextContent('Remove');

        const button3 = screen.getByTestId('remove-button');
        expect(button3).toBeVisible();
    });

    it('should match the snapshot', () => {
        const { asFragment } = render(<CartItem {...props} />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should', () => {
        const { container } = render(<CartItem {...props} />);

        // console.log(container.firstChild);

        expect(screen.getByTestId('remove-button')).toBeInTheDocument();
    });
});
