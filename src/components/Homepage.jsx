import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const Homepage = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100'>
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Homepage