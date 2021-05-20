import React from 'react'

const UserInformation = () => {
    return (
        <div>
            <div class="bg-white shadow overflow-hidden sm:rounded-lg w-2/5 order  h-full">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Account Detail
                </h3>

                </div>
                <div class="border-t border-gray-200 ">
                    <dl>
                    <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                               Name
                         </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                Hirola
                         </dd>
                        </div>

                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Email address
                         </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              inkiya_chotiya@gmail.com
                         </dd>
                        </div>

                        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Mobile No
                         </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                1234567890
                         </dd>
                        </div>


                    </dl>
                </div>
            </div>
        </div>
    )
}

export default UserInformation
