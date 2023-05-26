import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const { createUser, editUser, googleSignIn, githubSignIn, } = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();

        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        // update data

        const updateData = {
            displayName: name,
            photoURL: photo
        }

        // validation
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Password At least one uppercase character')
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Password At least one lowercase character')
            return;
        }
        else if (!/(?=.*\d)/.test(password)) {
            setError('Password At least one digit')
            return;
        }
        else if (password.length < 6) {
            setError('Password Minimum 6 characters')
            return;
        }

        createUser(email, password)
            .then((result) => {
                editUser(updateData)
                    .then(() => {
                        // console.log('successfully updated')
                    })
                    .catch((error) => {
                        setError(error.message)
                        console.log(error.message)
                    })
                console.log(result)
            })
            .catch(error => {
                if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                    setError('This email already used');
                }
                else {
                    setError(error.message);
                }
            })


        console.log(name, email, password, photo)

    }

    const handleGoogleLogin = () => {
        setError('')

        googleSignIn()
            .then((result) => {
                console.log(result)
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGitHubLogin = () => {
        setError('')

        githubSignIn()
            .then((result) => {
                console.log(result)
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className='container px-1 lg:mx-auto my-10 lg:w-8/12'>
            <div className='bg-base-200  rounded-lg px-5 py-10 lg:px-10 lg:py-20'>
                <h3 className='text-center text-4xl font-semibold'>Please Login</h3>
                {
                    error && <p className='text-center text-xl my-4 text-error font-semibold'>{error}</p>
                }
                 <form onSubmit={handleLogin} className='mt-10'>
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
                    <button onClick={handleGoogleLogin} className='btn btn-outline hover:btn-info flex-1 h-20 text-2xl flex items-center gap-2'>
                        <FaGoogle className='text-4xl' />
                        <p>google</p>
                    </button>
                    <button onClick={handleGitHubLogin} className='btn btn-outline flex-1 h-20 text-2xl flex items-center gap-2'>
                        <FaGithub className='text-4xl' />
                        <p>Github</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;