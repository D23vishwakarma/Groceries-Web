import React from 'react'
import Heading from '../Heading/Heading'
import Fruitveg from  '../../assets/fruits-and-veggies.png'
import Meatsea from '../../assets/meat-and-seafood.png'
import Dairyegg from '../../assets/dairy-and-eggs.png'
import Button from '../Button/Button'
function Category() {
    const rendercard=category.map(card=>{
        return(
        <div key={card.id} className='flex-1 p-4 '>
            <div className='w-full min-h-[30vh] relative -mb-10'>
                <img src={card.image} className='absolute bottom-0'></img>
            </div>
            <div className='items-center bg-zinc-100 rounded-2xl pt-16 p-5'>
                <h3 className='mx-auto w-fit font-semibold  text-lg md:text-2xl text-zinc-700'>{card.title}</h3>
                <p className='text-zinc-400 mt-1 mb-9 text-sm md:text-md'>{card.description}</p>
                <Button name="See More"/> 
            </div>
        </div>
        )
    })
    return (
        <section>
        <div className=' p-4 pt-30 md:pt-20 max-w-[1400px] mx-auto px-8 md:px-10'>
            <Heading highlight="Shop" content="by Category"/>
            {/* Cards */}
            <div className='flex md:flex-row flex-col gap-x-15 -mt-9 md:mt-10 text-center items-center'>{rendercard}</div>
        </div>
        </section>
    )
}

export default Category
const category=[
    {
        id:1,
        title:"Fruits & Veggies",
        image: Fruitveg,
        description: "Fresh farm-picked fruits and vegetables packed with nutrition and flavor."
    },
    {
        id:2,
        title:"Meat & SeaFood",
        image: Meatsea,
         description: "Premium quality meat and fresh seafood sourced for the best taste."
    },
    {
        id:3,
        title:"Dairy & Eggs",
        image: Dairyegg,
        description: "Pure dairy products and farm-fresh eggs for your daily essentials."
    }
]
