import React, { useContext } from 'react';
import CartContext from '../contextAPI/cardContext';

const CartItem = ({ item, handleRemove }) => {
    const { dispatch } = useContext(CartContext);

    const incrementQuantity = () => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: item.id });
    };

    const decrementQuantity = () => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: item.id });
    };
    const totalPrice = (item.price * item.quantity).toFixed(2);

    return (
        <div className="w-[200px] p-5 item-center" style={{ border: "1px solid #ddd" }}>
            <img className='w-[100px] h-[100px]' src={item.image} alt={item.title} />
            <h3 className='font-bold my-2 truncate'>{item.title}</h3>
            <p className='font-bold'>${totalPrice}</p>
            <div className="flex justify-center items-center gap-3">
                <button
                    onClick={decrementQuantity}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition duration-200"
                >
                    -
                </button>
                <span className="px-4 py-2 text-lg font-medium">{item.quantity}</span>
                <button
                    onClick={incrementQuantity}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full transition duration-200"
                >
                    +
                </button>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
