import React, { useEffect } from 'react'
import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide from '@glidejs/glide'
import '../../CSS/Crousal.css'


const Crousal = () => {

    useEffect(() => {

        const config = {
            autoplay: false,
            type: 'carousel',
            startAt: 0,
            perView: 1,
            duration: 0.25,
        }

        // new Glide('.glide', config).mount()
        var glide = new Glide('.glide', config).mount()

        glide.play(5000)

    },[])

    return (
        <div class="glide ">
            <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides "  >
                    <li class="glide__slide " >

                        <div class="block h-50vh w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right backgroundImage3" >
                            <div class="container mx-auto">
                                <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-16  tracking-wide" >
                                    <p class="text-black text-2xl my-4  ">Real Bamboo Wall Clock</p>
                                    <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#"  >view product</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="glide__slide "  >

                        <div class="block h-50vh w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right backgroundImage1" >
                            <div class="container mx-auto">
                                <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-16  tracking-wide" >
                                    <p class="text-black text-2xl my-4  ">Dolphin</p>
                                    <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#"  >view product</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="glide__slide "  >

                        <div class="block h-50vh w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right backgroundImage1" >
                            <div class="container mx-auto">
                                <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-16  tracking-wide" >
                                    <p class="text-black text-2xl my-4  ">Name</p>
                                    <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#"  >view product</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="glide__slide ">

                        <div class="block h-50vh w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right backgroundImage1" >
                            <div class="container mx-auto">
                                <div class="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-16  tracking-wide" >
                                    <p class="text-black text-2xl my-4  ">22222222222222222222222222222</p>
                                    <a class="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#"  >view product</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left hover:bg-gray-200" data-glide-dir="<">
                    <i class="fa fa-chevron-left text-black " aria-hidden="true"></i>
                </button>
                <button class="glide__arrow glide__arrow--right hover:bg-gray-200" data-glide-dir=">">
                    <i class="fa fa-chevron-right text-black  " aria-hidden="true"></i>
                </button>
            </div>
        </div>


    )
}


export default Crousal

