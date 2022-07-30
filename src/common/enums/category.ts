export enum Category {
    men = "men's clothing",
    woman = "women's clothing",
    jewelry = 'jewelery',
    electronics = 'electronics',
}

export interface ICategory {
    id: Category;
    title: string;
    color: string;
}
