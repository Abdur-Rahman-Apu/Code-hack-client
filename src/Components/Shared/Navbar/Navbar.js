import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Contexts';
import { FaUserAlt, Falig } from 'react-icons/fa';
import toast from 'react-hot-toast';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FMdDarkMode } from "@react-icons/all-files"
import './Navbar.css'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const [checked, setChecked] = useState(false);
    const handleCheckBox = () => {
        setChecked(!checked)
    }

    //log out

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Log out successfully")
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-lg px-3">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src="web-development.png" alt="Logo" width="50" height="44" className="d-inline-block align-text-top me-3" />
                    Code Hack
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>

                        <li className="nav-item d-flex ms-4 align-items-center">
                            {
                                user?.uid ?
                                    <>
                                        {user.displayName}


                                        {
                                            user?.photoURL ?
                                                <>
                                                    <Tippy content={user?.displayName}>
                                                        <img className="ms-2 rounded" src={user?.photoURL} height={40} width={40} alt="user img" />
                                                    </Tippy>
                                                </>
                                                :
                                                <Tippy content={user?.displayName}>
                                                    <FaUserAlt />
                                                </Tippy>

                                        }

                                        <Link className="nav-link" to="/login">
                                            <button onClick={handleLogOut} className='btn'>Log out</button>
                                        </Link>
                                    </>
                                    :
                                    <Link className="nav-link" to="/login">
                                        <button className='btn'>Log in</button>
                                    </Link>
                            }
                        </li>

                        <li className="nav-item">
                            <div className='form-switch'>
                                <input onClick={handleCheckBox} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label ms-3" htmlFor="flexSwitchCheckChecked">{(!checked) ? 'light' : 'dark'}</label>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;