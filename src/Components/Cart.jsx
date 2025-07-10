import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotalPrice, deleteCartItem } from '../Features/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const productCart = useSelector((state) => state.Cart.cartItems);
  const totalQuantity = useSelector((state) => state.Cart.TotalQuantity);
  const totalPrice = useSelector((state) => state.Cart.TotalPrice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotalPrice());
  }, [productCart, dispatch]);

  return (
    <div className="max-w-3xl mx-auto space-y-5 px-4 my-20">
      {/* Cart Items */}
      {productCart.length === 0 ? (
        <div className="text-center">
          <p className="text-2xl font-bold">Your cart is empty</p>
          <Link
            to="/"
            className="text-blue-600 underline font-bold hover:text-blue-400"
          >
            Continue Shopping..
          </Link>
        </div>
      ) : (
        productCart.map((value, index) => (
          <div
            className="flex items-center justify-between bg-white shadow-md p-6 rounded-lg"
            key={index}
          >
            <div className="flex items-center gap-6">
              <img
                src={value.image}
                alt="Product"
                className="w-24 h-24 rounded-lg object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">{value.title}</h3>
                <p className="text-gray-900">${value.price}</p>
                <p className="text-gray-500">Qty: {value.quantity}</p>
              </div>
            </div>
            <button
              className="bg-red-600 font-bold px-5 py-1 text-white rounded-lg cursor"
              onClick={() => dispatch(deleteCartItem(value.id))}
            >
              Delete
            </button>
          </div>
        ))
      )}

      {/* Totals */}
      {totalQuantity > 0 && (
        <>
          <div className="bg-white shadow-md p-4 rounded-lg mt-6 space-y-2">
            <div className="flex justify-between text-lg font-bold">
              <span>Total Quantity</span>
              <span>{totalQuantity}</span>
            </div>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg mt-4 space-y-2">
            <div className="flex justify-between text-lg font-bold">
              <span>Total Price</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg mt-4">
            Place Order
          </button>
        </>
      )}
    </div>
  );
}; 

export default Cart;
