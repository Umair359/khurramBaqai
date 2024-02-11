import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className="navbar bg-gray-500 h-20 border-gray-500 border-b-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><Link to={'/videos'}>Videos</Link></li>
                        <li><Link to={'/patient-info'}>Patient info leaflets</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Khurram Logo</Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='mx-0 font-bold'><Link to={'/'}>Home</Link></li>
                    <li className='mx-1 font-bold'><Link to={'/contact'}>Contact</Link></li>
                    <li className='mx-1 font-bold'><Link to={'/blog'}>Blog</Link></li>
                    <li className='mx-1 font-bold'><Link to={'/videos'}>Videos</Link></li>
                    <li className='mx-0 font-bold'><Link to={'/patient-info'}>Patient info leaflets</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/auth'} className="btn bg-gray-700 text-white border-none">Login</Link>
            </div>
        </div>
    )
}

export default Header
