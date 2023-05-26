import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className='container px-1 lg:mx-auto my-10 lg:w-8/12'>
            <div className='bg-base-200  rounded-lg px-5 py-10 lg:p-10 '>
                <h3 className='text-center text-4xl font-semibold'>Please Login</h3>
                <form>
                    <label className='block text-2xl font-semibold'>Email : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-warning my-2 rounded-lg' type="email" name='email' placeholder='Your Email' required />

                    <label className='block text-2xl font-semibold'>Password : </label>
                    <input className='block w-full h-16 text-2xl pl-5 focus:outline-warning my-2 rounded-lg' type="password" name='password' placeholder='Your Password' required />

                    <div className='flex justify-between'>
                        <Link to='/register' className='text-xl text-warning font-semibold underline  block hover:text-yellow-400'>Don't have an account ?</Link>

                        <Link className='text-xl text-warning font-semibold underline block hover:text-yellow-400'>Forgot password ?</Link>
                    </div>

                    <input className='btn btn-warning block w-full h-16 text-2xl mt-5 hover:bg-yellow-400' type="submit" value='Login' id="" />

                </form>
                <div className=' flex items-center'>
                    <hr className=' border-black w-full' />
                    <h2 className='m-5 text-xl font-semibold'>Or</h2>
                    <hr className=' border-black w-full' />
                </div>
                <div className='flex flex-col lg:flex-row justify-between gap-5'>
                    <button className='btn btn-outline hover:btn-info flex-1 h-20 text-2xl flex items-center gap-2'>
                        <FaGoogle className='text-4xl'/>
                        <p>google</p>
                    </button>
                    <button className='btn btn-outline flex-1 h-20 text-2xl flex items-center gap-2'>
                        <FaGithub className='text-4xl'/>
                        <p>Github</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;