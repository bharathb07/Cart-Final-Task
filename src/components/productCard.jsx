import React, { useContext } from 'react';
import CartContext from '../contextAPI/cardContext';
import { toast } from 'react-toastify';

const ProductCard = ({ product }) => {
    const { dispatch } = useContext(CartContext);

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
        toast.success("Product added to cart")
    };

    return (
        <div className="w-[200px] p-5 item-center" style={{ border: "1px solid #ddd" }}>
            <img className='w-[100px] h-[100px]' src={product.image} alt={product.title} />
            <h3 className='font-bold my-2 truncate'>{product.title}</h3>
            <p className='font-bold'>${product.price}</p>

            <div className="px-6 pt-4 pb-2">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={addToCart}>Add Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
