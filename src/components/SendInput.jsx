import axios from 'axios';
import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../redux/messageSlice';

const SendInput = () => {

    const { selectedUser, authUser } = useSelector(store => store.user)
    const { message } = useSelector(store => store.message)

    const dispatch = useDispatch()

    const [msg, setMsg] = useState("")
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:8080/api/message/send/${selectedUser?._id}`, { message: msg }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            dispatch(setMessage([...message, res?.data?.data?.msg]))

        } catch (error) {
            console.log(error)
        }
        setMsg("")
    }

    const { socket } = useSelector(store => store.socket);
    let userTyping = false;
    let timeout = undefined;
    const typingTimeout = () => {
        userTyping = false;
        socket.emit('typing', { user: authUser.userName, id: authUser._id, typing: false })
        clearTimeout(timeout)
    }
    const onChangeHandler = (e) => {
        setMsg(e.target.value)
        userTyping = true;
        socket.emit('typing', { user: authUser.userName, id: authUser._id, typing: userTyping })
        clearTimeout(timeout)
        timeout = setTimeout(typingTimeout, 2000)
    }

    return (
        <form className='px-4 my-3' onSubmit={ onSubmitHandler }>
            <div className='w-full relative'>
                <input
                    type="text"
                    placeholder='Send a message...'
                    value={ msg }
                    onChange={ onChangeHandler }
                    className='focus:border-transparent rounded-lg block w-full bg-gray-600 p-2'
                />

                <button
                    type='submit'
                    className='absolute flex inset-y-0 end-0 items-center pr-4'>
                    <IoSend />
                </button>
            </div>
        </form>
    )
}

export default SendInput