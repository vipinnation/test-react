import React, { useState } from 'react'
import '../../CSS/Profile.css'
import { NavLink } from 'react-router-dom'


const ProfileNavbar = () => {

    const [toggle, setToggle] = useState(false)
    return (
        <div className="sideNavbarWrapper">
            <span id="toggle-button"><i className="fa fa-bars mb-4" onClick={e => setToggle(!toggle)}></i></span>
            <div className="mx-auto sidenav" id='toggle'>
                <div>
                    <ul className="text-gray-500 text-sm font-medium ">
                        <NavLink exact to='/profile/user'>
                            <li className="mx-auto bg-gray-100 border border-green-800 hover:bg-green-200 p-4">
                                User Profile
                         </li>
                        </NavLink>
                        <NavLink exact to='/profile'>
                            <li className="mx-auto bg-gray-100  border border-green-800  hover:bg-green-200 p-4">
                                Order History
                    </li>
                        </NavLink>
                        <NavLink exact to='/profile/manageaddress'>
                            <li className="mx-auto bg-gray-100  border border-green-800 hover:bg-green-200  p-4">
                                Manage Address
                    </li>
                        </NavLink>
                        <NavLink exact to='/profile/secruity'>
                            <li className="mx-auto bg-gray-100  border border-green-800 hover:bg-green-200 p-4">
                                Security
                    </li>

                        </NavLink>

                    </ul>
                </div>
            </div>

            {
                (toggle) ? (<div className="float-left" id="mobile">
                    <div>
                        <ul className="text-gray-500 text-sm font-medium mb-8  ">
                            <NavLink exact to='/profile/user' className="rounded ">
                                <li className=" bg-gray-100 border rounded-full   border-green-800 hover:bg-green-200 ">
                                    <span className="px-2"> User Profile</span>
                                </li>
                            </NavLink>
                            <NavLink exact to='/profile'>
                                <li className="mx-auto bg-gray-100 rounded-full    border border-green-800  hover:bg-green-200  ">
                                    <span className="px-2">  Order History
 </span>                    </li>
                            </NavLink>
                            <NavLink exact to='/profile/manageaddress'>
                                <li className="mx-auto bg-gray-100 rounded-full     border border-green-800 hover:bg-green-200 ">
                                    <span className="px-2">  Manage Address </span>
                                </li>
                            </NavLink>
                            <NavLink exact to='/profile/secruity'>
                                <li className="mx-auto bg-gray-100 rounded-full    border border-green-800 hover:bg-green-200 ">
                                    <span className="px-2">  Security
      </span>               </li>

                            </NavLink>

                        </ul>
                    </div>
                </div>) : null
            }


        </div>
    )
}

export default ProfileNavbar
