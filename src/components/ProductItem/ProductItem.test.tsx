import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Category } from 'common';
import ProductItem from './ProductItem';

describe('<ProductItem />', () => {
    const props = {
        id: 12,
        title: 'test',
        image: '/test/img-1.png',
        description: 'some-description',
        category: Category.men,
        price: 12,
        isAdded: false,
        onProductAdd: jest.fn(),
    };

    it('should display button - Add to Cart', () => {
        render(<ProductItem {...props} />);

        const button = screen.getByRole('button');
        expect(button.textContent).toEqual('Add to Cart');
    });

    it('should display button - In Cart', () => {
        render(<ProductItem {...props} isAdded />);

        const button = screen.getByRole('button');
        expect(button.textContent).toEqual('In Cart');
    });

    it('should handle onClick', () => {
        render(<ProductItem {...props} />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(props.onProductAdd).toHaveBeenCalledTimes(1);
    });

    it('should handle onClick - 2', () => {
        render(<ProductItem {...props} />);

        const button = screen.getByRole('button');
        userEvent.click(button);

        expect(props.onProductAdd).toHaveBeenCalledTimes(1);
    });

    it('should set focus on button', () => {
        render(<ProductItem {...props} />);

        expect(screen.getByRole('button')).not.toHaveFocus();

        userEvent.tab();

        expect(screen.getByRole('button')).toHaveFocus();
    });
});
