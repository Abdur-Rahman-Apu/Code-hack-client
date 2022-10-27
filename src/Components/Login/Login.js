import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../Contexts/Contexts';
import toast from 'react-hot-toast';

const Login = () => {

    const { user, logIn, resetPassword, googleSignIn, setLoading } = useContext(AuthContext)

    const navigate = useNavigate();

    const location = useLocation();

    const from = location?.state?.from?.pathname || '/'

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                if (user.emailVerified) {
                    navigate(from, { replace: true });
                    toast.success("Successfully log in")
                } else {
                    toast.error('Please verify your email')
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    //handle forget password

    const handleForgetPassword = () => {
        resetPassword()
            .then(() => {
                toast.success("Please check your email to reset password")
            })
            .catch(error => {
                toast.error(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    //handle google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Successfully done")
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div>
            <div className='my-4 d-flex justify-content-center'>
                <div className='w-50  shadow-sm p-4 border border-1 rounded'>

                    <h3 className='text-center'>Login</h3>

                    <form onSubmit={handleLogin} className='mt-3'>

                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" name="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" name='password' className="form-control" id="inputPassword3" required />
                            </div>

                        </div>

                        <div className='row mb-3'>
                            <div className='col-sm-10 offset-sm-2'>
                                <Link onClick={handleForgetPassword}>Forgot password?</Link>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-sm-10 offset-sm-2'>
                                <Link to='/register'>Are you a new user? please register</Link>
                            </div>
                        </div>


                        <button type="submit" className="register-btn">Login</button>
                    </form>

                    <p className='text-center my-3'>

                        <span>Or</span>

                    </p>

                    <button onClick={handleGoogleSignIn} className='w-100 mt-3 py-2 google-btn'>
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