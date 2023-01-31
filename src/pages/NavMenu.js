import React from 'react';

const NavMenu = () => {
    return (
        <div>
            <nav className='fixed top-20 left-20  text-white z-30'>
                <ul>
                    <li className="font-semibold mt-4"><a href="#home">Home</a></li>
                    <li className="font-semibold mt-4"><a href="#about">About</a></li>
                    <li className="font-semibold mt-4"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavMenu;