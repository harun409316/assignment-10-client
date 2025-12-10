import React, { createContext, useEffect, useState } from 'react';
import { auth } from './../Firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


//google sign in
    const createUserGoogle = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    const googleLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
    }
    const logOUtGoogle = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    };
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
     const signIn = (email, password) =>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
        }
        const updateUser = (updatedData) =>{
            return updateProfile(auth.currentUser, updatedData);
        }
        const logOUt = () => {
          
            return signOut(auth);
        }

        useEffect(() =>{
            const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
                setUser(currentUser);
                setLoading(false);
            })
            return () => {
                unsubscribe();
            }
        },[]);

    const authData = {
        user,
        setUser,
        createUserGoogle,
        loginUser,
        googleLogin,
        loading,
        setLoading,
        logOUtGoogle,
        updateUserProfile,
        createUser,
        signIn,
        updateUser,
        logOUt,
        resetPassword,

       
    }

    return <AuthContext value={authData}>{children}</AuthContext>;    

  
};

export default AuthProvider;