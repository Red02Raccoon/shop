import { ICategory, Category } from '../enums/category';

export const categories: ICategory[] = [
    { id: Category.men, title: 'tr_menClothing', color: 'green' },
    { id: Category.woman, title: 'tr_womenClothing', color: 'geekblue' },
    { id: Category.jewelry, title: 'tr_jewelry', color: 'magenta' },
    { id: Category.electronics, title: 'tr_electronics', color: 'gold' },
];

export const defaultLocale = 'en';

export const languages = [
    {
        key: 'uk',
        label: 'Українська',
    },
    {
        key: 'en',
        label: 'English',
    },
];
