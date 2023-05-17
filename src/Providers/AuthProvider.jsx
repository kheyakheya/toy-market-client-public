import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const  AuthContext=createContext(null);
const auth=getAuth(app);
const googleProvider= new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setUser]=useState({});
    const [loading,setLoading]=useState(true);
    // registration page info
    const register=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const profileUpdate=(name,photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {displayName:name, photoURL: photo});
    }
    // login page info
    const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const githubLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    
    // logout
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log("state change", currentUser)
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{unsubscribe()}
    },[])
    const authInfo={user,register, loading, profileUpdate, logIn, googleLogin, githubLogin, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;