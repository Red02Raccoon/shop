import React, { useEffect, useState } from 'react';

import { Spin } from 'antd';

import { ProductItem, CartDrawer, CartButton, Filter } from 'components';
import { IProductItem, categories, Category } from 'common';
import { FormattedMessage } from 'react-intl';

const Shop = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<IProductItem[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<IProductItem[]>([]);

    const [selectedProductsIds, setSelectedProductsIds] = useState<number[]>([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setProducts(json);
                setFilteredProducts(json);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const handleProductAdd = (id: number) => () => {
        const newData = [...selectedProductsIds];
        const index = selectedProductsIds.indexOf(id);

        if (index >= 0) {
            newData.splice(index, 1);
        } else {
            newData.splice(newData.length, 0, id);
        }

        setSelectedProductsIds(newData);
    };

    const handleDrawerToggle = () => {
        setIsDrawerOpen((prev) => !prev);
    };

    const handleFilterChange = (categories: Category[]) => {
        if (!categories.length) {
            setFilteredProducts(products);
            return;
        }

        const newProducts = products.reduce((acc, item) => {
            return categories.includes(item.category) ? [...acc, item] : acc;
        }, [] as IProductItem[]);

        setFilteredProducts(newProducts);
    };

    const getSelectedProductsCount = () => {
        return selectedProductsIds?.length;
    };

    return (
        <div>
            <div className="flex flex-row mb-5">
                <h2 className="text-2xl mr-auto">
                    <FormattedMessage id="tr_products" />
                </h2>

                <CartButton count={getSelectedProductsCount()} onCartOpen={handleDrawerToggle} />
            </div>

            <div className="flex flex-row mb-3">
                <Filter categories={categories} onFilterChange={handleFilterChange} />
            </div>

            <Spin spinning={isLoading}>
                <div className="grid grid-cols-1 gap-y-20 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 min-h-screen">
                    {filteredProducts.map(({ id, title, image, price, description, category }) => (
                        <ProductItem
                            key={id}
                            id={id}
                            title={title}
                            image={image}
                            price={price}
                            description={description}
                            category={category}
                            isAdded={!!selectedProductsIds.includes(id)}
                            onProductAdd={handleProductAdd(id)}
                        />
                    ))}
                </div>
            </Spin>

            <CartDrawer
                isOpen={isDrawerOpen}
                products={products.filter(({ id }) => selectedProductsIds.includes(id))}
                onClose={handleDrawerToggle}
            />
        </div>
    );
};

export default Shop;
