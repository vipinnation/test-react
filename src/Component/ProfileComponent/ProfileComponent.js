import React from 'react'
import ProfileNavbar from './ProfileNavbar'
import UserInformation from './UserInformation'

const ProfileComponent = () => {
    return (
        <div className="bg-gray-100  py-8">
            <ProfileNavbar />
            <UserInformation />
        </div>

    )
}

export default ProfileComponent
