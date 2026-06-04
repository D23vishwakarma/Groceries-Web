import React from 'react'

function Button(props) {
    return (
        <button className=" px-5 py-2 md:px-7 md:py-3 bg-gradient-to-r from-orange-500 to-amber-300 text-white font-semibold rounded-full shadow-lg hover:from-orange-600 hover:to-amber-400 hover:scale-105 transition-all duration-300">
  {props.name}
</button>
    )
}

export default Button
