import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const [userData, setUserData] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCheckbox = (gender) => {
        setUserData({ ...userData, gender: gender })
    }
    const onFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8080/api/users/register', userData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if (res.data.code === 200) {
                toast.success("Account created");
                navigate('/login')
            }
        } catch (error) {
            console.log(error.response)
            toast.error(error.response.data.message)
        }
        setUserData({
            fullName: "",
            userName: "",
            password: "",
            confirmPassword: "",
            gender: ""
        })
    }

    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100'>
                <h1 className='text-3xl font-bold text-center text-gray-300'>SignUp</h1>
                <form action="" onSubmit={ onFormSubmit }>
                    <div>
                        <label className="input input-bordered flex items-center gap-2 my-4">
                            Name
                            <input
                                name='fullName'
                                value={ userData.fullName }
                                onChange={ handleChange }
                                type="text"
                                className="grow"
                                placeholder="" />
                        </label>
                    </div>

                    <div>
                        <label className="input input-bordered flex items-center gap-2 my-4">
                            Username
                            <input
                                name='userName'
                                value={ userData.userName }
                                onChange={ handleChange }
                                type="text"
                                className="grow"
                                placeholder="" />
                        </label>
                    </div>

                    <div>
                        <label className="input input-bordered flex items-center gap-2 my-4">Password
                            <input
                                name='password'
                                value={ userData.password }
                                onChange={ handleChange }
                                type="password"
                                className="grow"
                                placeholder="" />
                        </label>
                    </div>

                    <div>
                        <label className="input input-bordered flex items-center gap-2 p-2">
                            Confirm Password
                            <input
                                name='confirmPassword'
                                value={ userData.confirmPassword }
                                onChange={ handleChange }
                                type="password"
                                className="grow"
                                placeholder="" />
                        </label>
                    </div>

                    <div className='flex items-center my-2'>
                        <div className='flex items-center py-2 mx-2'>
                            <p className="font-bold">Male</p>
                            <input
                                checked={ userData.gender === "male" }
                                onChange={ () => handleCheckbox("male") }
                                type="checkbox"
                                defaultChecked
                                className="checkbox mx-2" />
                        </div>
                        <div className='flex items-center py-2 mx-2'>
                            <p className="font-bold">Female</p>
                            <input
                                checked={ userData.gender === "female" }
                                onChange={ () => handleCheckbox("female") }
                                type="checkbox"
                                defaultChecked
                                className="checkbox mx-2" />
                        </div>
                    </div>

                    <div>
                        <button type='submit' className="my-3 btn btn-block btn-sm btn-outline">
                            Sign Up
                        </button>
                    </div>

                    <div className='text-sm'>
                        { `Already have an account? ` }
                        <Link to={ '/login' }>
                            Login here
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup