import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide from '@glidejs/glide'

const ProductSlider = () => {

    useEffect(() => {

        const productSlider = {
            autoplay: false,
            type: 'carousel',
            perView: 5,
            breakpoints: {
                800: {
                    perView: 2
                },
                1024: {
                    perView: 4
                }
            }
        }
        var productSlide = new Glide('.productSlider', productSlider).mount()

        // productSlide.play(4000)

    }, [])
    return (
        <div class="productSlider mx-5">
            <div class="px-4 py-5 sm:px-6 border-b flex justify-between">
                <h3 class="text-lg leading-6 font-medium  ">
                    Featured Products
                </h3>
            </div>
            <div class="glide__track glideMarginPaddingInside m-4 px-4" data-glide-el="track">

                <ul class="glide__slides glideMarginPadding  mx-8 px-8">
                    <li class="glide__slide  ">

                        <div class=" p-4 w-full">

                           <NavLink exact to="/product/nk-first-sem">
                           <div className="w-4/5 rounded">
                                <img alt="ecommerce" class=" border  p-1 "
                                    src="https://raw.githubusercontent.com/vipinnation/testfile/main/NK%20FIRST%20SEM.jpg" />
                            </div>

                            <div class="mt-4">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">NK 1ST SEM</h2>
                                <p class="mt-1 font-bold">Price:- 320</p>
                            </div>
                            <div class=" flex mt-1 w-94">
                                <NavLink exact to="/product/nk-first-sem">

                                    <button type="button"
                                        class="add-to-cart text-sm w-full py-2 z-20 px-4 rounded-button bg-gray-900 text-gray-400 w-100 button-hover re-button button-padding">
                                        Add To Cart
            </button>
                                </NavLink>                         </div>
                           </NavLink>
                        </div>
                    </li>

                </ul>

            </div>
            <div class="productSlider glide__arrows relative  bottom-24 text-black bg-gray-900" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left  bg-red-900 swiper-arrow-left" data-glide-dir="<">
                    <i class="fa fa-chevron-left text-black"></i>
                </button>
                <button class="glide__arrow glide__arrow--right  swiper-arrow-right" data-glide-dir=">">
                    <i class="fa fa-chevron-right text-black"></i>
                </button>
            </div>

        </div>
    )
}

export default ProductSlider
