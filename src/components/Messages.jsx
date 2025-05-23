import React from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import { useSelector } from 'react-redux';
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';

const Messages = () => {
    useGetMessages();
    useGetRealTimeMessage();
    const { message } = useSelector(store => store.message)
    // console.log(message, "********")
    return (
        <div className='px-4 flex-1 overflow-auto'>
            {
                message && message?.map((msg) => {
                    return (
                        <Message key={ msg._id } message={ msg } />
                    )
                })
            }

        </div>
    )
}

export default Messages