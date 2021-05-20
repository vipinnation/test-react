import React from 'react'
import Crousal from '../Utility/Crousal'
import SearchProduct from '../Utility/SearchProduct'
import ProductSlider from './ProductSlider'

const HomeComponent = () => {
    return (
        <div>
            <Crousal />
            <SearchProduct />
            <ProductSlider />
        </div>
    )
}

export default HomeComponent
