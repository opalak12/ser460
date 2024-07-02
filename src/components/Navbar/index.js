import React, { useState } from 'react';
import "./styles.css";
import { RxAvatar } from "react-icons/rx";

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    return (
        <div className='navbar'>

            <div className="profile-container">
                <button className="icon" onClick={toggleMenu}>
                    <RxAvatar />
                </button>
                {isOpen && (
                    <ul className='dropdown-menu'>
                        <li>
                            Option 1
                        </li>
                        <li>
                            Option 2
                        </li>
                        <li>
                            Option 3
                        </li>
                    </ul>
                )}
            </div>

        </div>
    )
}

export default Navbar;