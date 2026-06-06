import React from 'react'
import Banner from '../Banner/Banner'
import ProductLists from '../ProductList/ProductList'
import ProductCard from '../ProductCard/ProductCard'

function CategoryPage(props) {
    const filterItem =
        props.category === "All"
            ? ProductLists
            : ProductLists.filter((item) =>
                Array.isArray(props.category)
                    ? props.category.includes(item.category)
                    : item.category === props.category
            );
    const renderList = filterItem.map(product => {
        return (
            <ProductCard image={product.image} name={product.name} price={product.price} />
        )
    })
    return (
        <section className='max-w-[1400px] mx-auto'>
            <Banner img={props.image} title={props.title}/>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 place-items-center mt-18 mb-10'>
                {renderList}
            </div>
        </section>
    )
}

export default CategoryPage
