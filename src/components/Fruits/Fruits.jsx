import React from 'react'
import CategoryPage from '../Categorypage/CategoryPage'
import Bgfruits from '../../assets/fruits-banner.jpg'

function Fruits() {
    return (
        <CategoryPage image={Bgfruits} title='Fruits & Veggies' category={['Fruits','Vegetables']}/>
    )
}

export default Fruits
