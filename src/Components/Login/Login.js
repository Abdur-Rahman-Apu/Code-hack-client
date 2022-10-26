import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <div className='my-4 d-flex justify-content-center'>
                <div className='w-50  shadow-sm p-4 border border-1 rounded'>

                    <h3 className='text-center'>Login</h3>

                    <form className='mt-3'>

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

                        <div className='row mb-3'>
                            <div className='col-sm-10 offset-sm-2'>
                                <Link>Forgot password?</Link>
                            </div>
                        </div>


                        <button type="submit" className="register-btn">Login</button>
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
        </div>
    );
};

export default Login;