import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import OtherUsers from './OtherUsers';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';

const Sidebar = () => {

    const [search, setSearch] = useState("")

    const navigate = useNavigate();
    const { otherUsers } = useSelector(store => store.user)

    const dispatch = useDispatch()


    const logoutHandler = async () => {
        try {
            const res = await axios.post('http://localhost:8080/api/users/logout');
            toast.success(res.data.data)
            dispatch(setAuthUser(null))
            navigate('/login', { replace: true });
        } catch (error) {
            console.log(error)
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(otherUsers)
        try {
            const result = otherUsers?.find(user => user.fullName.toLowerCase().includes(search.toLowerCase()))
            console.log(result)
        } catch (error) {

        }
    }
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <form onSubmit={ submitHandler } className='flex items-center gap-2'>
                <input
                    type="text"
                    className="input input-bordered rounded-md items-center gap-2 grow"
                    placeholder="Search..."
                    value={ search }
                    onChange={ e => setSearch(e.target.value) }
                />
                <button type='submit' className='btn  bg-slate-600'>
                    <IoSearchSharp className='w-6 h-6 outline-none' />
                </button>
            </form>
            <div className="divider px-2"></div>
            <OtherUsers />
            <div className='mt-3'>
                <button onClick={ logoutHandler } className='btn btn-sm btn-outline btn-error'>Logout</button>
            </div>
        </div>
    )
}

export default Sidebar