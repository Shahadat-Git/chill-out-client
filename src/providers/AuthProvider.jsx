import React from 'react';
import { createContext } from 'react';
import {
    GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut
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

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // auth state observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
            console.log('auth state changed', loggedUser)
        })
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        googleSignIn,
        githubSignIn,
        logOut,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;