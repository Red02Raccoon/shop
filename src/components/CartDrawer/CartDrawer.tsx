import React, { FC } from 'react';
import { Drawer } from 'antd';

import { IProductItem } from '../../common/types';
import { CartItem } from '../CartItem';

interface IProps {
    isOpen: boolean;
    subtotal?: number;
    products: IProductItem[];
    onClose: () => void;
}

const CartDrawer: FC<IProps> = ({ isOpen, subtotal = 999, products, onClose }) => {
    return (
        <Drawer title="Shopping cart" placement="right" onClose={onClose} visible={isOpen}>
            <div className="cart flow-root">
                <div className="divide-y divide-gray-200">
                    {products.map((product) => (
                        <CartItem key={product.id} {...product} />
                    ))}
                </div>

                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${subtotal}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                    </p>

                    <div className="mt-6">
                        <button className="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                            Checkout
                        </button>
                    </div>

                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                            or
                            <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={onClose}
                            >
                                Continue Shopping<span aria-hidden="true"> &rarr;</span>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export default CartDrawer;
