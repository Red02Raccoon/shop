import { useEffect, useState } from "react";

import { IProductItem } from "./common/types";
import { ProductItem } from "./components";

const App = () => {
  const [products, setProducts] = useState<IProductItem[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
