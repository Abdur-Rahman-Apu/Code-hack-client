import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";



export const AuthContext = createContext();

const auth = getAuth(app);

const Contexts = ({ children }) => {

    const [user, setUser] = useState(null)


    const [loading, setLoading] = useState(true)

    //email log in
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update user profile
    const updateUserProfile = (profile) => {

        return updateProfile(auth.currentUser, profile)
    }


    //email verification
    const verifyEmail = () => {

        return sendEmailVerification(auth.currentUser)
    }


    // google sign in 

    const googleProvider = new GoogleAuthProvider();


    const googleSignIn = () => {

        return signInWithPopup(auth, googleProvider);
    }

    //login with email and password

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //reset password
    const resetPassword = () => {
        setLoading(true)
        return sendPasswordResetEmail(auth, auth.currentUser.email)
    }


    //log out

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    //github log in
    const githubProvider = new GithubAuthProvider();

    const githubSignIn = () => {

        return signInWithPopup(auth, githubProvider)
    }


    //hold user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser == null || currentUser.emailVerified) {
                setUser(currentUser)
            }
            setLoading(false)
        })


        return () => {
            unsubscribe();
        }
    }, [])






    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        verifyEmail,
        googleSignIn,
        logOut,
        resetPassword,
        logIn,
        loading,
        setLoading,
        githubSignIn,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Contexts;