import axios from 'axios';
import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../redux/messageSlice';

const SendInput = () => {

    const { selectedUser } = useSelector(store => store.user)
    const { message } = useSelector(store => store.message)

    const dispatch = useDispatch()

    const [msg, setMsg] = useState("")
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log(message)
        try {
            const res = await axios.post(`http://localhost:8080/api/message/send/${selectedUser?._id}`, { message: msg }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (message) {
                dispatch(setMessage([...message, res?.data?.data?.msg]))
            } else {
                dispatch(setMessage([res?.data?.data?.msg]))
            }
        } catch (error) {
            console.log(error)
        }
        setMsg("")
    }

    return (
        <form className='px-4 my-3' onSubmit={ onSubmitHandler }>
            <div className='w-full relative'>
                <input
                    type="text"
                    placeholder='Send a message...'
                    value={ msg }
                    onChange={ e => setMsg(e.target.value) }
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