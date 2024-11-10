import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100'>
                <h1 className='text-3xl font-bold text-center text-gray-300'>SignUp</h1>
                <form action="">
                    <div>
                        <label className="input input-bordered flex items-center gap-2 my-4">
                            Name
                            <input type="text" className="grow" placeholder="" />
                        </label>
                    </div>

                    <div>
                        <label className="input input-bordered flex items-center gap-2 my-4">
                            Username
                            <input type="text" className="grow" placeholder="" />
                        </label>
                    </div>

                    <div>
                        <label className="input input-bordered flex items-center gap-2 my-4">Password
                            <input type="password" className="grow" placeholder="" />
                        </label>
                    </div>

                    <div>
                        <label className="input input-bordered flex items-center gap-2 p-2">
                            Confirm Password
                            <input type="password" className="grow" placeholder="" />
                        </label>
                    </div>

                    <div className='flex items-center my-2'>
                        <div className='flex items-center py-2 mx-2'>
                            <p className="font-bold">Male</p>
                            <input type="checkbox" defaultChecked className="checkbox mx-2" />
                        </div>
                        <div className='flex items-center py-2 mx-2'>
                            <p className="font-bold">Female</p>
                            <input type="checkbox" defaultChecked className="checkbox mx-2" />
                        </div>
                    </div>

                    <div>
                        <button className="my-3 btn btn-block btn-sm btn-outline">
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