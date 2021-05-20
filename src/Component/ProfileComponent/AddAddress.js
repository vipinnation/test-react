import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileNavbar from './ProfileNavbar'

const AddAddress = () => {
    return (
        <div className="bg-gray-100 py-8">
            <ProfileNavbar />
            <div class="bg-white shadow overflow-hidden sm:rounded-lg w-2/5  py-8  h-full">
                <div class="px-4 py-5 sm:px-6 border-b flex justify-between">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Add Address
                </h3>
                    <div>
                        <NavLink exact to='/profile/manageaddress'>
                            <button className="btn btn-primary rounded-full px-2 -mt-8" type="button">Go Back</button>
                        </NavLink>
                    </div>

                </div>


                <div className="mx-auto px-8 border-b py-5">

                    <form id="form" novalidate>
                        <div className="relative z-0 w-full mb-5 px-5">
                            <input
                                type="text"
                                name="name"
                                placeholder=" "
                                required
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Name</label>
                        </div>

                        <div className="relative z-0 w-full mb-5 px-5">
                            <input
                                type="text"
                                name="email"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Address</label>

                        </div>



                        <div className="flex">
                            <div className="relative z-0 w-full mb-5 px-5">
                                <input
                                    type="text"
                                    placeholder=" "
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label for="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Locality</label>

                            </div>
                            <div className="relative z-0 w-full mb-5 px-5">
                                <input
                                    type="text"
                                    placeholder=" "
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label for="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">City</label>

                            </div>
                        </div>
                        <div className="flex mx-auto">
                            <div className="relative z-0 w-full mb-5 px-5">
                                <input
                                    type="number"
                                    placeholder=" "
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label for="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Pin Code</label>

                            </div>
                            <div className="relative z-0 w-full mb-5 px-5">
                                <input
                                    type="number"
                                    placeholder=" "
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                />
                                <label for="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Mobile Number</label>

                            </div>
                        </div>







                        <div className='mx-auto'>
                            <button
                                id="button"
                                type="submit"
                                className="w-50 px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none btn-primary hover:shadow-lg focus:outline-none"
                            >
                                Add Address
                             </button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AddAddress
