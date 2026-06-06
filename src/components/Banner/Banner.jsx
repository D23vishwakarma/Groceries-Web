import React from 'react'

function Banner(props) {
    return (
        <div
            className="bg-center bg-cover h-[50vh] mt-21 rounded-2xl max-w-full flex justify-center items-center mx-auto mb-3 relative overflow-hidden"
            style={{ backgroundImage: `url(${props.img})` }}
        >
            <div className="absolute inset-0 bg-black/20"></div>

            <h2 className="relative text-white text-4xl md:text-5xl font-bold px-8 py-4 rounded-2xl bg-white/15 backdrop-blur-lg border border-white/20 shadow-2xl">
                {props.title}
            </h2>
        </div>
    )
}

export default Banner
