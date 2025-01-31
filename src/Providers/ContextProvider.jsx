import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { auth } from './../firebase/firebase_init';

export const AuthContext = createContext(null);

const ContextProvider = ({children}) => {

    const [loggedInUser,setLoggedInUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=> {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password)=> {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signOutUser = ()=> {
        return signOut(auth)
    }

    useEffect(()=> {
        onAuthStateChanged(auth,(user)=> {
            if(user){
                setLoading(false);
                setLoggedInUser(user);
            }
            else {
                console.log("User logout");
                setLoggedInUser(null);
            }
        })
    },[])


    const authInfo = {
        loading,
        setLoading,
        createUser,
        loggedInUser,
        setLoggedInUser,
        signOutUser,
        loginUser
    }
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;