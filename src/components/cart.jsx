//import default package module...
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

//import components module...
import CartContext from '../contextAPI/cardContext';
import CartItem from './cartItem';

const Cart = () => {
    const { state, dispatch } = useContext(CartContext);
    const [customer, setCustomer] = useState({ name: '', email: '', city: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: id });
        toast.success("Product removed")
    };

    const orderConfirm = () => {
        console.log(state.cart, customer, "finalresponse");
        toast.success("Order placed sucessully")
    }

    return (
        <div className="m-4">
            <div className='flex flex-wrap item-center gap-3'>
                {state.cart.map(item => (
                    <CartItem key={item.id} item={item} handleRemove={handleRemove} />
                ))}
            </div>
            <div className="mt-5">
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" placeholder="Name" value={customer.name} onChange={handleChange} className='appearance-none block w-[50%] bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:bg-white' />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="email" name="email" placeholder="Email" value={customer.email} onChange={handleChange} className='appearance-none block w-[50%] bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:bg-white' />
                </div>
                <div>
                    <label>City: </label>
                    <input type="text" name="city" placeholder="City" value={customer.city} onChange={handleChange} className='appearance-none block w-[50%] bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:bg-white' />
                </div>


                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => {
                    orderConfirm()
                }}>
                    <span>Place Order</span>
                </button>
            </div>
        </div>
    );
};

export default Cart;
