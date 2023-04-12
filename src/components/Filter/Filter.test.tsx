import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { categories } from 'common';
import { renderComponent as render } from 'utils';

import Filter from './Filter';

describe('<Filter/>', () => {
    const props = {
        categories,
        onFilterChange: jest.fn(),
    };

    const isChecked = (title: string) =>
        screen.getByText(title).classList.contains('ant-tag-checkable-checked');

    it('should display correct title', () => {
        render(<Filter {...props} />);

        expect(screen.getByText('Filter')).toBeInTheDocument();
    });

    it('should set all as checked by default', () => {
        render(<Filter {...props} />);

        expect(isChecked('All')).toBeTruthy();
    });

    it('should not change status if user press checked all tag', async () => {
        const user = userEvent.setup();
        render(<Filter {...props} />);

        expect(isChecked('All')).toBeTruthy();
        await user.click(screen.getByText('All'));

        expect(isChecked('All')).toBeTruthy();
    });

    it('should set new active category and delete', async () => {
        const user = userEvent.setup();
        render(<Filter {...props} />);

        await user.click(screen.getByText("Men's clothing"));

        expect(isChecked("Men's clothing")).toBeTruthy();
        expect(isChecked('All')).toBeFalsy();

        await user.click(screen.getByText("Men's clothing"));

        expect(isChecked("Men's clothing")).toBeFalsy();
        expect(isChecked('All')).toBeTruthy();
    });

    it('should set active categories', async () => {
        const user = userEvent.setup();
        render(<Filter {...props} />);

        await user.click(screen.getByText("Men's clothing"));
        await user.click(screen.getByText("Women's clothing"));

        expect(isChecked("Men's clothing")).toBeTruthy();
        expect(isChecked("Women's clothing")).toBeTruthy();
        expect(isChecked('All')).toBeFalsy();
    });
});
