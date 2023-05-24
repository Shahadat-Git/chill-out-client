import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiMenuAlt1, HiX } from "react-icons/hi";
import logo from '../assets/logo.png';
const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className='bg-main  py-4 px-4'>
            <div className="flex justify-between items-center container mx-auto">
                <div className="">
                    <Link to='/'>
                        <img className='w-32' src={logo} alt="" />
                    </Link>
                </div>
                <div className="lg:flex gap-5 hidden">
                    <Link className='font-semibold text-white text-xl hover:text-warning'>Home</Link>
                    <Link className='font-semibold text-white text-xl hover:text-warning'>Blog</Link>

                </div>
                <div>
                    <button className='hidden lg:block btn btn-warning'>login</button>
                </div>
                {/* for phone */}
                <div className='lg:hidden'>
                    {
                        menu ? <HiX onClick={() => setMenu(!menu)} className='text-white text-4xl'></HiX> : <HiMenuAlt1 onClick={() => setMenu(!menu)} className='text-white text-4xl'></HiMenuAlt1>
                    }
                </div>
            </div>
            {
                menu && <div className='flex flex-col gap-4 '>
                    <div className=" lg:hidden flex flex-col gap-4">
                        <Link className='font-semibold text-white text-xl hover:text-warning'>Home</Link>
                        <Link className='font-semibold text-white text-xl hover:text-warning'>Blog</Link>

                    </div>
                    <div>
                        <button className='lg:hidden btn btn-warning'>login</button>
                    </div>
                </div>
            }
        </div >
    );
};

export default Header;