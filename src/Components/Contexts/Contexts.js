import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";



export const AuthContext = createContext();

const auth = getAuth(app);

const Contexts = ({ children }) => {

    const [user, setUser] = useState(null)


    //email log in
    const createUser = (email, password) => {
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
        return signInWithEmailAndPassword(auth, email, password)
    }


    //reset password
    const resetPassword = () => {
        return sendPasswordResetEmail(auth, auth.currentUser.email)
    }


    //log out

    const logOut = () => {
        return signOut(auth);
    }


    //hold user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser == null || currentUser.emailVerified) {
                setUser(currentUser)
            }
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
        logIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Contexts;