import React from 'react'
import { PiPlant, PiFactory, PiSealCheck, PiTruck } from "react-icons/pi";
import { TbCircleNumber1Filled, TbCircleNumber2Filled,
         TbCircleNumber3Filled, TbCircleNumber4Filled } from "react-icons/tb";


function Heading(props) {
    
    return (
        <>
        <div className='mx-auto w-fit text-zinc-800'>
        <h2 className=' text-[1.5rem] md:text-[2.1rem] font-bold'><span className='text-amber-500'>{props.highlight} </span>{props.content}</h2>
        <div className="md:w-25 w-22 md:h-1 h-0.5 bg-amber-500 rounded-full mt-1 ml-auto"></div>
        </div>
        </>
    )
}

export default Heading
