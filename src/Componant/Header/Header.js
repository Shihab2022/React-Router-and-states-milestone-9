import React from 'react';
// import './Header.css'
const Header = () => {
    return (
        <nav>
            <ul className="flex justify-around align-center bg-gray-400 py-5 tailwind">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </nav>
    );
};

export default Header;