import React from 'react';
import { Link } from 'react-router-dom';

import {
  BsFacebook,
  BsYoutube,
  BsTwitter,
  BsInstagram,
  BsLinkedin} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white text-center py-4">
      <div className='h-40 flex justify-between' >
        <div className='w-1/3 flex flex-col gap-4' >
          <h1 className='text-lg'>Page Links</h1>
          <ul>
            <li className='hover:underline'><Link to={'/'}>Home</Link></li>
            <li className='hover:underline'><Link to={'/contact'}>Contact</Link></li>
            <li className='hover:underline'><Link to={'/blog'}>Blog</Link></li>
            <li className='hover:underline'><Link to={'/patient-info'}>Patient info leaflets</Link></li>
          </ul>
        </div>
        <div className='w-1/3' >
          <h1 className='text-lg'>Socail Links</h1>
          <div className='flex justify-center items-center h-1/2' >
          <BsFacebook className='text-gray-900 hover:text-white w-8 h-8 mx-2'/>
          <BsYoutube className='text-gray-900 hover:text-white w-8 h-8 mx-2'/>
          <BsTwitter className='text-gray-900 hover:text-white w-8 h-8 mx-2'/>
          <BsInstagram className='text-gray-900 hover:text-white w-8 h-8 mx-2'/>
          <BsLinkedin className='text-gray-900 hover:text-white w-8 h-8 mx-2'/>
          </div>
        </div>
        <div className='w-1/3 flex items-center justify-center' >
          <p>To Contact me on whatsApp Click Here</p>
        </div>
      </div>
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} www.proxmair.com</p>
      </div>
    </footer>
  );
};

export default Footer;





