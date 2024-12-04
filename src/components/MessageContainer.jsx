import React, { useEffect } from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { setSelectedUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux'

const MessageContainer = () => {
    const dispatch = useDispatch()
    const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user)

    const isOnline = onlineUsers?.includes(selectedUser?._id) ? "online" : "offline";

    // To not persist selected user uncomment this 
    // useEffect(() => {
    //     return () => {
    //         dispatch(setSelectedUser(null))
    //     }
    // }, [dispatch])

    return (
        <>
            {
                selectedUser ? (
                    <div className='md:min-w-[550px] flex flex-col'>
                        <div className='flex gap-3 items-center bg-gray-700 text-white px-4 py-2 mb-2'>
                            <div className={ `avatar ${isOnline}` }>
                                <div className='w-12 rounded-full  '>
                                    <img src={ selectedUser?.profilePic } alt="" />
                                </div>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='font-bold flex justify-between gap-2'>
                                    <p>{ selectedUser?.fullName }</p>
                                </div>
                            </div>
                        </div>
                        <Messages />
                        <SendInput />
                    </div >
                ) : (
                    <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
                        <h1 className='text-4xl text-white font-bold'>Hi,{ authUser?.fullName } </h1>
                        <h1 className='text-2xl text-white'>Let's start having some fun 🚀</h1>

                    </div>
                )
            }
        </>

    )
}

export default MessageContainer