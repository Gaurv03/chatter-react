import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [userData, setUserData] = useState({
        userName: "",
        password: "",
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/api/users/login', userData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res.data.code === 200) {
                toast.success("Logged In");
                navigate('/')
            }
        } catch (error) {
            console.log(error.response)
            toast.error(error.response.data.message)
        }

        setUserData({
            userName: "",
            password: "",
        })
    }


    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100'>
                <h1 className='text-3xl font-bold text-center text-gray-300'>SignUp</h1>
                <form action="" onSubmit={ onFormSubmit }>
                    <div className='py-3'>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input
                                name='userName'
                                value={ userData.userName }
                                onChange={ handleChange }
                                type="text"
                                className="grow"
                                placeholder="Username" />
                        </label>
                    </div>

                    <div className='py-3'>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input
                                name='password'
                                value={ userData.password }
                                onChange={ handleChange }
                                type="password"
                                className="grow"
                                placeholder='Password' />
                        </label>
                    </div>
                    <div>
                        <button type="submit" className="my-3 btn btn-block btn-sm btn-outline">
                            Login
                        </button>
                    </div>

                    <div className='text-sm'>
                        { `Not registered yet? ` }
                        <Link to={ '/register' }>
                            Sign-up here
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login