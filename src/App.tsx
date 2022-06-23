import { useEffect, useState } from 'react';

import { IProductItem } from 'common/types';
import { ProductItem, Header, CartDrawer } from 'components';

const App = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [products, setProducts] = useState<IProductItem[]>([]);
    const [selectedProductsIds, setSelectedProductsIds] = useState<number[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setProducts(json);
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

    return (
        <div className="bg-white">
            <Header count={selectedProductsIds.length} onCartOpen={handleDrawerToggle} />

            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="mb-10 text-2xl">Products</h2>

                <div className="grid grid-cols-1 gap-y-20 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map(({ id, title, image, price, description }) => (
                        <ProductItem
                            key={id}
                            id={id}
                            title={title}
                            image={image}
                            price={price}
                            description={description}
                            isAdded={!!selectedProductsIds.includes(id)}
                            onProductAdd={handleProductAdd(id)}
                        />
                    ))}
                </div>

                <CartDrawer
                    isOpen={isDrawerOpen}
                    products={products.filter(({ id }) => selectedProductsIds.includes(id))}
                    onClose={handleDrawerToggle}
                />
            </div>
        </div>
    );
};

export default App;
