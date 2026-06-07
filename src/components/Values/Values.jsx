import React from 'react'
import Heading from '../Heading/Heading'
import { SiCodefresh } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { ImLeaf } from "react-icons/im";
import veg from '../../assets/basket-full-vegetables.png'

function Values() {
    const leftval = value.slice(0, 2).map(obj => {
        return (
            <div key={obj.id} className='flex flex-row md:flex-row-reverse items-center gap-6'>
                <div>
                    <span className='flex justify-center items-center bg-gradient-to-r from-orange-500 to-amber-300 w-11 h-11 text-xl md:w-13 md:h-13 rounded-full text-white md:text-2xl'>{obj.icon}</span>
                </div>
                <div className='text-left md:text-right p-4'>
                    <h3 className='text-zinc-800 md:text-2xl text-lg font-semibold'>{obj.title}</h3>
                    <p className='text-zinc-600 md:text-md text-sm'>{obj.description}</p>
                </div>
            </div>
        )
    })

    const righttval = value.slice(2, 4).map(obj => {
        return (
            <div key={obj.id} className='flex items-center gap-6'>
                <div>
                    <span className='flex justify-center items-center bg-gradient-to-r from-orange-500 to-amber-300 w-11 h-11 md:w-13 text-xl md:h-13 rounded-full text-white md:text-2xl'>{obj.icon}</span>
                </div>
                <div className='text-left p-4'>
                    <h3 className='text-zinc-800 md:text-2xl text-lg font-semibold'>{obj.title}</h3>
                    <p className='text-zinc-600 md:text-md text-sm'>{obj.description}</p>
                </div>
            </div>
        )
    })

    return (
        <>
            <section>
                <div className='p-4 pt-16 md:pt-20 max-w-[1400px] mx-auto px-8 md:px-10'>
                    <Heading highlight="Our" content="Values" />

                    <div className='flex flex-col md:flex-row mt-10 md:mt-20 gap-5'>
                        {/* left values */}
                        <div className='flex flex-col justify-between gap-8 md:gap-0'>
                            {leftval}
                        </div>

                        <div className=' md:flex md:w-1/2 hidden'>
                            <img src={veg} />
                        </div>

                        {/* right values */}
                        <div className='flex flex-col justify-between gap-8 md:gap-0'>
                            {righttval}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Values

const value = [
    {
        id: 1,
        title: "Trust",
        description:
            "It is a long established fact that a reader will be distracted by the readable content.",
        icon: <FaHeart />
    },
    {
        id: 2,
        title: "Always Fresh",
        description:
            "It is a long established fact that a reader will be distracted by the readable content.",
        icon: <SiCodefresh />
    },
    {
        id: 3,
        title: "Food Safety",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: <MdOutlineHealthAndSafety />
    },
    {
        id: 4,
        title: "100% Organic",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        icon: <ImLeaf />
    },
];