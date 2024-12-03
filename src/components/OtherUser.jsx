import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({ user }) => {
    const dispatch = useDispatch();
    const selectedUserHandler = () => {
        dispatch(setSelectedUser(user))
    }
    const { selectedUser } = useSelector(store => store.user)
    return (
        <>
            <div className={ `${selectedUser?._id === user?._id ? 'bg-zinc-300 text-black rounded' : ''} flex gap-3 p-1 items-center cursor-pointer py-2` } onClick={ () => selectedUserHandler(user) }>
                <div className='avatar online'>
                    <div className='w-12 rounded-full  '>
                        <img src={ user?.profilePic } alt="" />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='font-bold flex justify-between gap-2'>
                        <p>{ user?.fullName }</p>
                    </div>
                </div>
            </div>
            <div className='divider my-0 py-1 h-1'></div>
        </>
    )
}

export default OtherUser