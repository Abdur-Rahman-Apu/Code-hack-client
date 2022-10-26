import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import './Register.css'

const Register = () => {

    const [checked, setChecked] = useState(false);


    // handle checkbox 
    const handleCheckBox = () => {
        setChecked(!checked)
    }

    return (
        <div className='my-5 d-flex justify-content-center'>
            <div className='w-50  shadow-sm p-4 border border-1 rounded'>

                <h3 className='text-center'>Register</h3>

                <form className='mt-3'>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="name" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="photo" className="col-sm-2 col-form-label">Photo URL</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="photo" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" required />
                        </div>

                    </div>



                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onClick={handleCheckBox} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Accept terms & conditions
                                </label>
                            </div>
                        </div>
                    </div>
                    <button disabled={!checked} type="submit" className={(!checked) ? "register-btn-disabled" : "register-btn"}>Register</button>
                </form>

                <p className='text-center my-3'>

                    <span>Or</span>

                </p>

                <button className='w-100 mt-3 py-2 google-btn'>
                    <FaGoogle className='me-3' />
                    Log in with Google
                </button>
                <button className='w-100 mt-3 py-2 github-btn'>
                    <FaGithub className='me-3' />
                    Log in with Github
                </button>
            </div>
        </div>
    );
};

export default Register;