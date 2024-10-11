import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";

import { newUserType } from "../interface/user";

//SIGN IN USER
export const signIn = async (email: string, password: string): Promise<UserCredential | string> => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
  }
};

//LOG OUT
export const logOut = async (): Promise<void | string> => {
  try {
    await auth.signOut();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
  }
};

//CREATE NEW USER (SIGNUP)
export const createNewUser = async (credentials: newUserType): Promise<UserCredential | string> => {
  try {
    const user = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password);
    await setDoc(doc(db, "users", user.user.uid), {
      ...credentials,
      uid: user.user.uid,
    });
    return user.user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
  }
};
