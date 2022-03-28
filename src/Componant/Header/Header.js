import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
// import './Header.css'
const Header = () => {
    const [open,setOpen]=useState(false)
    return (
        <nav className="bg-gray-400 py-5">
              <div onClick={()=>setOpen(!open)} className="icon md:hidden">
                  {
                      open ? <XIcon className="h-8 w-10"></XIcon> : <MenuIcon className="h-8 w-10"></MenuIcon>
                  }
  
            </div>
         
            <ul className={`md:flex justify-around align-center absolute duration-500 w-full  bg-gray-400 md:static ease-in pb-4 ${open ? 'top-15' : 'top-[-500px]'}`}>
       
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    );
};

export default Header;