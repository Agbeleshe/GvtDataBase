import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    UserCredential,
  } from "firebase/auth";
  import { auth, db } from "../firebase/fire";
  import { doc, setDoc } from "firebase/firestore";
  
  //SIGN IN USER
  export const signIn = async (email: string, password: string): Promise<UserCredential | string> => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      return res.user;
    } catch (error: any) {
      return error.message;
    }
  };
  
  //LOG OUT
  export const logOut = async (): Promise<void | string> => {
    try {
      await auth.signOut();
    } catch (error: any) {
      return error.message;
    }
  };
  
  //CREATE NEW USER (SIGNUP)
  export const signup = async (email: string, password: string, userData: Record<string, any>): Promise<UserCredential | string> => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", user.user.uid), {
        ...userData,
        uid: user.user.uid,
      });
      return user.user;
    } catch (error: any) {
      return error.message;
    }
  };
  