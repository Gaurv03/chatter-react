import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'

const Message = ({ message }) => {

    const scroll = useRef();

    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [message])


    let formatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit"
    });
    const { authUser, selectedUser } = useSelector(store => store.user)
    return (
        <div ref={ scroll } className={ `chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}` }>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="PFP"
                        src={ message?.senderId === authUser?._id ? authUser?.profilePic : selectedUser?.profilePic } />
                </div>
            </div>
            <div className="chat-header my-0.5">
                <time className="text-xs opacity-50">{ formatter.format(Date.parse(message?.createdAt)) } </time>
                <time className="text-xs opacity-50">{ (message?.createdAt).match(/\d\d:\d\d/)[0] }</time>
            </div>
            <div className={ `chat-bubble ${message?.senderId !== authUser?._id ? 'chat-bubble-info' : 'bg-slate-900'} ` }>{ message.message }</div>
        </div>

    )
}

export default Message