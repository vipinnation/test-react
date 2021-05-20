import React from 'react'
import ProfileNavbar from './ProfileNavbar'
import { NavLink } from 'react-router-dom'

const UserAddress = () => {
    return (
        <div className="bg-gray-100 py-8">
            <ProfileNavbar />
            <div class="bg-white shadow overflow-hidden sm:rounded-lg w-2/5  py-8 order  h-full">
                <div class="px-4 py-5 sm:px-6 border-b flex justify-between">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Manage Address
                </h3>
                    <div>
                        <NavLink exact to='/profile/add-address'>
                            <button className="btn btn-primary rounded-full px-2 -mt-8" type="button">Add New</button>
                        </NavLink>
                    </div>

                </div>


                <div className="mx-auto px-8 border-b">
                    <ul>
                        <li>
                            <div className="border-b py-2 px-4">
                                <div className="">
                                    <h1 className="font-semibold inline">Vipin Meghwal </h1>
                                    <h1 className="font-semibold inline ml-3">9983809222 </h1>
                                </div>
                                <div className="px-4">
                                    <p>  Near Samriya Coloney </p>
                                    <p>  Pushkar, Ajmer</p>
                                    <p>  305022</p>
                                </div>
                                <div className="flex justify-end manageAddressButton">
                                    <NavLink exact to='#'>
                                        <button className="mx-1 btn bg-red-300 hover:bg-red-100 rounded-full px-2">Edit</button>
                                    </NavLink>
                                    <NavLink exact to='#'>
                                        <button className="mx-1 btn bg-red-300 hover:bg-red-100 rounded-full px-2">Delete</button>
                                    </NavLink>

                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default UserAddress
