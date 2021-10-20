import './Header.css'
import React from 'react';
import img from '../../images/logo2.png'
import { Link } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light nav_bg">
                <div className="container">
                    {/* <a className="navbar-brand" href="">Navbar</a> */}
                    <Link to="./home"><img className="navbar-brand "  src={img} alt="" /></Link>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>                           
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>                           
                                                      
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="./privacy">Privacy & Policy</Link>
                            </li>                           
                            <li className="nav-item">
                            {user?.email? 
                            <Link className="nav-link active" aria-current="page" onClick={logOut} to="/login">Log out</Link>:
                            <Link className="nav-link active" aria-current="page" to="/login">Log in</Link>}
                            <span>{user?.displayName}</span>
                            </li>                           
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;