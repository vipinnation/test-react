import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileNavbar from './ProfileNavbar'

const OrderComponent = () => {
    return (
        <div className="bg-gray-100 py-8">
            <ProfileNavbar />
            <div class="bg-white shadow overflow-hidden sm:rounded-lg w-2/5  order py-8  h-full">
                <div class="px-4 py-5 sm:px-6 border-b flex justify-between">
                    <h3 class="text-lg leading-6 font-medium text-gray-900"> Order History</h3>
                </div>


                <div className="mx-auto px-8 border-b">
                    <ul>
                        <li>
                            <div className="border-b py-2 px-4">
                                <div className="">
                                    <h1 className="font-semibold inline">Product Name</h1>
                                </div>
                                <div className="px-4">
                                    <p> Status : Deliverd </p>
                                    <p> Date: 17/05/2021 </p>

                                </div>

                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default OrderComponent
