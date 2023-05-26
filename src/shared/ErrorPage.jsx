import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {status, statusText,error} = useRouteError();
    // console.log(useRouteError())
    return (
            <div className='h-screen flex justify-center items-center' style={{background: `url("/assets/error_page.jpg")`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
            <div className='flex flex-col items-center gap-10'>
                <h2 className='text-8xl  font-bold text-white'>{status &&  status}</h2>
                <h1 className='text-6xl  font-bold text-white'>{statusText || "Error"}</h1>
                <h3 className='text-xl lg:text-4xl  font-bold text-white'>{error && error.message}</h3>
            </div>
        </div>
    ); 
};

export default ErrorPage;