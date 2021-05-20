import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import emptyCart from '../../Images/EmptyCart.jpeg'
import '../../CSS/cart.css'
const CartComponent = () => {


    useEffect(() => {

        localStorage.setItem('cart', "cart")
    }, [])
    return (
        <div>
            {
                localStorage.getItem('cart') ? (<div className="order container mx-auto w-1/2 cart-width">

                    <div className="flex  items-center border-b pb-4 pt-1 border-gray-300">
                        <img src="img/cart-black.png" alt="" />
                        <h1 className="font-bold text-2xl ml-4 h-primary">Order Summary</h1>
                    </div>
                    <div className="pizza-list border-b border-gray-300 mx-5">


                        <div className="flex items-center my-8">
                            <img className="w-24  py-2 mobile-image" alt="" />
                            <div className="flex-1 ml-4">
                                <h1 className="font-bold text-xl ">

                                </h1>
                                <span><strong>NK 3rd Sem</strong></span>
                                <br></br>
                                <span>Price :- 310</span>
                            </div>
                            <div className="flex-1 justify-content align-items">
                                <span className=" "><i class="fa fa-minus" aria-hidden="true"></i></span>
                                <span className="mr-1"> 1 pcs  </span>
                                <span className=" "><i class="fa fa-plus" aria-hidden="true"></i></span>
                                <span className="text-lg font-bold  hover:bg-red-500 rounded mx-2"> <i className="fa fa-trash hover:text-red-200"> </i> </span>
                            </div>
                            <span className="text-lg font-bold mr-1">₹ 310 </span>

                        </div>



                    </div>

                    <div className="mx-5">
                        <div className="text-right py-4">
                            <span className="text-lg font-bold">Total Amount:-</span>
                            <span className="text-2xl text-primary font-bold ml-2"> ₹ 310</span>
                        </div>
                        <div className="text-right">
                            <NavLink exact to="/checkout" className="inline-block btn-primary py-1 px-4 rounded-full mt-4 text-white font-bold "> Proceed To Chekout</NavLink>
                        </div>
                    </div>
                </div>
                ) : (
                    <div className="empty-cart text-center py-2">

                        <h1 className="text-3xl font-bold mb-3  ">Cart is Empty</h1>
                        <p className="mb-5 text-gray-500 text-lg">You probably haven`t ordered yet . </p>

                        <img className="w-2/5 mx-auto mb-3" src={emptyCart} alt="" srcset="" />

                        <NavLink exact to="/" className="inline-block mx-auto"><button className="btn-primary py-1 px-6 rounded-full text-center"> Go Back
    </button></NavLink>
                    </div>)
            }




        </div>
    )
}

export default CartComponent
