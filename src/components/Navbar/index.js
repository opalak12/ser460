import React, { useState, useEffect } from 'react';
import "./styles.css";
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
      }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
      const handleNavigation = (path) => {
        navigate(path);
        setIsOpen(false)
        setIsLoggedIn(true)
      };

      const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        navigate('/');
      };

    return (
        <div className='navbar'>

            <div className="profile-container">
                <button className="icon" onClick={toggleMenu}>
                    <RxAvatar />
                </button>
                {isOpen && (
                <ul className='dropdown-menu'>

                    {!isLoggedIn && (
                    <li>
                        <button onClick={() => handleNavigation('/login')}>Login</button>
                    </li>
                    )}

                    {isLoggedIn && (
                        <li>
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    )}

                    <li>
                    <button onClick={() => handleNavigation('/publish')}>Add meal</button>
                    </li>
                    <li>
                    <button onClick={() => handleNavigation('/subscribe')}>Subscription</button>
                    </li>
                </ul>
                )}
            </div>

        </div>
    )
}

export default Navbar;