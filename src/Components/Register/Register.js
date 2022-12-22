import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../Contexts/Contexts';
import './Register.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

    const { createUser, updateUserProfile, verifyEmail, setLoading, setUser } = useContext(AuthContext);

    const [checked, setChecked] = useState(false);



    const navigate = useNavigate();




    // handle checkbox 
    const handleCheckBox = () => {
        setChecked(!checked)
    }

    //handle registration
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);


                //update name and photo
                const profile = {
                    displayName: name, photoURL: photo
                }
                updateUserProfile(profile)
                    .then(() => {
                        toast.success("Name and photo added")
                    })
                    .catch(error => {
                        toast.error("Error to set name and photo")
                    })
                    .finally(() => {
                        setLoading(false)
                    })


                //email verification
                verifyEmail()
                    .then(() => {
                        toast.success("Please check your email and verify")
                    })
                    .catch(error => {
                        toast.error(error.message)
                    }).finally(() => {
                        setLoading(false)
                    })
                toast.success("Please log in")
                navigate('/login')



            })
            .catch(error => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    return (
        <div className='my-5 d-flex justify-content-center register-container'>
            <div className='w-50  shadow-sm p-4 border border-1 rounded'>

                <h3 className='text-center title-style'>Register</h3>

                <form onSubmit={handleRegister} className='mt-3'>
                    <div className="row mb-3">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Full Name</label>
                        <div className="col-sm-10">
                            <input type="text" name='name' className="form-control" id="name" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="photo" className="col-sm-2 col-form-label">Photo URL</label>
                        <div className="col-sm-10">
                            <input type="text" name='photo' className="form-control" id="photo" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" name='email' className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3" name='password' required />
                        </div>

                    </div>



                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                            <div className="form-check">
                                <input onClick={handleCheckBox} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label fw-bold" htmlFor="gridCheck1">
                                    Accept terms & conditions
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <div className='col-sm-10 offset-sm-2'>
                            <Link to='/login'>Do you have any account? please log in</Link>
                        </div>
                    </div>
                    <button disabled={!checked} type="submit" className={(!checked) ? "register-btn-disabled" : "register-btn"}>Register</button>
                </form>


            </div>
        </div>
    );
};

export default Register;