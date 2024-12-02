import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import OtherUsers from './OtherUsers';

const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <form action="" className='flex items-center gap-2'>
                <input type="text" className="input input-bordered rounded-md items-center gap-2 grow" placeholder="Search..." />
                <button type='submit' className='btn  bg-slate-600'>
                    <IoSearchSharp className='w-6 h-6 outline-none' />
                </button>
            </form>
            <div className="divider px-2"></div>
            <OtherUsers />

        </div>
    )
}

export default Sidebar