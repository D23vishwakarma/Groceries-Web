import React from 'react'
import Grocery from "../../assets/grocery.webp"
import Button from '../Button/Button'
function Hero() {
    return (
        <section>
            <div className='max-w-[1400px] px-10 mx-auto flex md:flex-row flex-col text-zinc-800 max-h-screen items-center min-h-screen pt-25'>
                {/* hero content */}
                <div className=' justify-center flex-1 w-full text-centre'>
                    <span className='bg-amber-100 text-sm md:text-lg text-amber-600 p-1 md:py-2 md:px-3 rounded-full '>Export Best Quality</span>
                    <h1 className='text-3xl/9 md:text-5xl/15 font-bold mt-3 md:mt-6'>Tasty Organic<br></br><span className='text-amber-500'>Fruits</span> And <span className='text-amber-500'>Veggitables</span><br></br>in Your City</h1>
                    <p className='text-sm text-zinc-500 mt-3 mb-7 max-w-80 md:max-w-120 md:text-1xl/2'>Get farm-fresh fruits, vegetables, dairy products, and daily essentials delivered quickly with the best quality and unbeatable prices.</p>
                    <Button name="Shop Now"/>
                </div>
                {/* hero image */}
                <div className='flex-1'>
                    <img src={Grocery} alt='heroimg'></img>
                </div>

            </div>
        </section>
    )
}

export default Hero
