import { render, screen } from '@testing-library/react';

import { Category } from 'common';
import CartItem from './CartItem';

//NOTE: learn different assertions and selectors
describe('CartItem', () => {
    const props = {
        id: 12,
        title: 'test',
        description: 'test-description',
        image: '/test/img-1.png',
        price: 12,
        category: Category.men,
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

    it('should contain correct description for Remove button', () => {
        render(<CartItem {...props} />);

        expect(
            screen.getByRole('button', {
                name: 'Remove',
                description: 'You can reduce quantity of products',
            })
        ).toBeInTheDocument();
    });

    it('should update title if prop is changed - rerender', () => {
        const { rerender } = render(<CartItem {...props} />);

        rerender(<CartItem {...props} title={'test rerender function'} />);

        expect(screen.getByRole('heading', { level: 3 }).textContent?.trim()).toEqual(
            'test rerender function'
        );
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
