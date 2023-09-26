import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {app} from "../../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user,setUser] = useState(null)

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,loggedUser =>  {
        console.log('on state change is working', loggedUser)
        setUser(loggedUser)
    })

    return () => {
        unsubscribe()
    }
} ,[])

  const authInfo = {
    user,
    createUser,
    signIn,
    googleSignIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
