import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const productCart=useSelector((state)=>(state.Cart.cartItems));
  return (
    <div className='max-w-3xl mx-auto my-10 space-y-5 px-4'>
        {/* Cart Items */}
       {
        productCart.map((value,index)=>(
             <div className='flex items-center justify-center bg-white shadow-md p-10 rounded-lg' key={index}>
        <div className='flex items-center gap-6'> 
            <img src={value.image} alt="Product image" className='w-24 h-24 rounded-lg object-contain'/>
            <h3 className='font-bold text-lg'>
                {value.title}

            </h3>
            <p className='text-gray-900'>{value.price}</p>
            <p className='text-gray-500'>Qty:1</p>
        </div>
        <button className='text-red-500 hover:text-red-950 text-xl'>Delete 🚽</button>

        <div  ></div>
        </div>
        ))
       }
        <div className='bg-white shadow-md p-4 rounded-lg mt-6 space-y-2'>
            <div className='flex justify-between text-lg font-bold'>
            <span>Total Quantity</span>
            <span>5</span>
            </div>
        </div>
        <div className='bg-white shadow-md p-4 rounded-lg mt-6 space-y-2'>
            <div className='flex justify-between text-lg font-bold'>
            <span>Total Price</span>
            <span>598</span>
            </div>
        </div>
        <button className='w-full bg-green-600 text-white py-2 rounded-lg'>Pace Order</button>
    </div>
  )
}

export default Cart