import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import CartContext from '../contextAPI/cardContext';
import ProductCard from './productCard';

const ProductList = () => {
    const { state, dispatch } = useContext(CartContext);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                dispatch({ type: 'SET_PRODUCTS', payload: response.data });
            });
    }, [dispatch]);

    return (
        <div className="my-4 flex flex-wrap justify-center item-center gap-3">
            {state.products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
