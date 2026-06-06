import React from 'react'
import Banner from '../Banner/Banner'
import CategoryPage from '../Categorypage/CategoryPage'
import Bgmeat from '../../assets/seafood-banner.jpg'

function Meat() {
    return (
        <CategoryPage image={Bgmeat} title='Meat & Seafoods' category={['Meat','Seafood']}/>
    )
}

export default Meat
