import React from 'react';
import { createContext } from 'react';
import {
    GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile
} from 'firebase/auth'
import app from '../utils/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const editUser = (data) => {
        return updateProfile(auth.currentUser, data);
    }

    // auth state observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
            // console.log('auth state changed', loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        googleSignIn,
        githubSignIn,
        logOut,
        editUser,
        loading,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;