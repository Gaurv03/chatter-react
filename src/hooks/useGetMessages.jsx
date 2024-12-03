import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMessage } from '../redux/messageSlice';


const useGetMessages = () => {
    const { selectedUser } = useSelector(store => store.user)
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                axios.defaults.withCredentials = true;
                const res = await axios.post(`http://localhost:8080/api/message/get/${selectedUser?._id}`)
                dispatch(setMessage(res.data.data.msgData))
            } catch (error) {
                console.log(error)
            }
        }
        fetchMessages();
    }, [selectedUser, dispatch])

}

export default useGetMessages