import { Category } from '../enums';

export interface IProductItem {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
    category: Category;
}
