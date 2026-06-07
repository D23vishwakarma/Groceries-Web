import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

function Cart() {
  const { cart, dispatch } = useContext(CartContext)

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if(cart.length === 0) {
    return (
      <div className='min-h-screen flex items-center justify-center px-4'>
        <h2 className='text-xl md:text-2xl font-bold text-zinc-500'>Your cart is empty</h2>
      </div>
    )
  }

  return (
    <section className='max-w-[1400px] mx-auto px-4 md:px-8 pt-28 md:pt-32 pb-10'>
      <h2 className='text-2xl md:text-3xl font-bold mb-6 md:mb-8'>Your Cart</h2>

      <div className='flex flex-col gap-4'>
        {cart.map((item) => (
          <div key={item.name} className='flex flex-col sm:flex-row sm:items-center sm:justify-between bg-zinc-100 rounded-xl p-4 gap-3'>
            
            {/* Image + Name */}
            <div className='flex items-center gap-4'>
              <img src={item.image} loading='lazy' alt={item.name} className='w-16 h-16 object-contain shrink-0' />
              <h3 className='font-semibold text-base md:text-lg'>{item.name}</h3>
            </div>

            {/* Qty + Price + Remove */}
            <div className='flex items-center justify-between sm:justify-end sm:gap-8'>
              <p className='text-zinc-600 text-sm md:text-base'>Qty: {item.quantity}</p>
              <p className='font-bold text-sm md:text-base'>${(item.price * item.quantity).toFixed(2)}</p>
              <button
                onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { name: item.name } })}
                className='bg-red-500 text-white px-3 py-1 text-sm rounded-lg hover:bg-red-600 transition-all'>
                Remove
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Total */}
      <div className='flex justify-between items-center mt-8 border-t pt-6'>
        <h3 className='text-xl md:text-2xl font-bold'>Total</h3>
        <p className='text-xl md:text-2xl font-bold text-orange-500'>${total.toFixed(2)}</p>
      </div>

      {/* Clear Cart */}
      <button
        onClick={() => dispatch({ type: 'CLEAR_CART' })}
        className='mt-6 w-full sm:w-auto px-6 py-3 bg-zinc-800 text-white rounded-xl hover:bg-zinc-900 transition-all'>
        Clear Cart
      </button>
    </section>
  )
}

export default Cart