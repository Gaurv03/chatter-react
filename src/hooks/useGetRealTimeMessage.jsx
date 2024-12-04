import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "../redux/messageSlice";

const useGetRealTimeMessage = () => {
    const { socket } = useSelector(store => store.socket);
    const { message } = useSelector(store => store.message);
    const dispatch = useDispatch();
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            dispatch(setMessage([...message, newMessage]));
        });
        return () => socket?.off("newMessage");
    }, [setMessage, message]);
};
export default useGetRealTimeMessage;