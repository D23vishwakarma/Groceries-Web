import React from 'react'
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import Button from '../Button/Button';

function ProductCard({ image, name, price }) {
  return (
    <div className="bg-zinc-100 rounded-lg p-4 w-full max-w-[270px] h-[390px] flex flex-col items-center relative shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      {/* Heart Icon */}
      <button className="absolute top-5 left-5 text-zinc-300 text-2xl hover:text-red-500 transition-all duration-300">
        <FaHeart />
      </button>

      {/* Add Icon */}
      <button className="absolute top-5 right-5 bg-orange-500 text-white p-2.5 rounded-md text-xl hover:bg-orange-600 transition-all duration-300">
        <FaPlus />
      </button>

      {/* Product Image */}
      <img
        src={image}
        alt={name}
        className="w-28 h-28 md:w-36 md:h-36 object-contain mt-16"
      />

      {/* Product Name */}
      <h3 className="mt-6 text-zinc-900 font-bold text-lg md:text-xl text-center">
        {name}
      </h3>

      {/* Product Price */}
      <p className="mt-3 mb-4 text-zinc-900 font-bold text-lg md:text-xl">
        ${price.toFixed(2)}
      </p>

      {/* Button */}
      <Button name="Shop Now" />

    </div>
  )
}

export default ProductCard