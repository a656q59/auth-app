import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';

import { useState, useEffect } from 'react';
import AuthContext from './AuthContext'


    export const AuthProvider = ({ children }) => {
        const [user, setUser] = useState(null);

        useEffect(() => {
        onAuthStateChanged(auth,(user) => {
        setUser(user)
        })
        }, []);

        return (
            <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
        );
    };