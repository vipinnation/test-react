import React from 'react'
import {NavLink} from 'react-router-dom'
const SignupComponent = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
                <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <h1 className="text-2xl font-bold mb-8">Register Here !!</h1>
                    <form id="form" novalidate>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="name"
                                placeholder=" "
                                required
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Name</label>
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="email"
                                name="email"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Email Address</label>

                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="password"
                                name="password"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Password</label>

                        </div>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="password"
                                name="password"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label for="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Confrim Password</label>

                        </div>







                        <div className='mx-auto'>
                            <button
                                id="button"
                                type="submit"
                                className="w-50 px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none btn-primary hover:shadow-lg focus:outline-none"
                            >
                                SignUp
                             </button>
                            <span className="text-sm text-red-600  float-right mt-8" id="error"> <NavLink exact to='/login'> Already have Account</NavLink></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupComponent
