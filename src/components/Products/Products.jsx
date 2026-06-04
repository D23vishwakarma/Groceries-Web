import React, { useState } from 'react'
import Heading from '../Heading/Heading'
import ProductList from '../ProductList/ProductList';
import ProductCard from '../ProductCard/ProductCard';
import Button from '../Button/Button';

function Products() {
    const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Seafood']
    const [isActive, setIsActive] = useState('All');
    const filtereditems = isActive === 'All' ? ProductList : ProductList.filter(items => items.category === isActive)
    const rendercard = filtereditems.slice(0, 8).map(product => {
        return (
            <ProductCard image={product.image} name={product.name} price={product.price} />
        )
    }
    )
    const cat = categories.map((category) => {
        return (
            <button
                key={category}
                onClick={() => setIsActive(category)}
                className={`shrink-0 px-4 py-2.5 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-[15px] font-semibold cursor-pointer transition-all duration-200 tracking-wide
      ${isActive === category
                        ? "bg-gradient-to-r from-orange-400 to-amber-400 text-white scale-105 shadow-lg shadow-orange-300/40"
                        : "bg-white text-zinc-500 border border-zinc-200 shadow-sm hover:bg-zinc-100 hover:text-zinc-800"
                    }`}
            >
                {category}
            </button>
        );
    });

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-8 md:px-10 py-13 md:py-20'>
                <Heading highlight="Our" content="Products" />
                <div className="flex items-center justify-start sm:justify-center gap-3 overflow-x-auto px-4 py-3 scrollbar-hide">
                    {cat}
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 place-items-center mt-18'>
                    {rendercard}
                </div>
                <div className='mt-9 flex justify-center'>
                    <Button name="View All" />
                </div>
            </div>
        </section>
    )
}

export default Products
