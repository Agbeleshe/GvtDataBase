import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth, db } from "../firebase/fire";
import { doc, onSnapshot } from "firebase/firestore";

interface UserContextType {
  isLoggedOut: boolean;
  user: any; // You might want to replace 'any' with a specific type if you know the structure of your user data
}

// (1.) First you must define the global name for your context provider. UserContext in this situation is used to pass user data around the app to avoid prop drilling
const UserContext = createContext<UserContextType | undefined>(undefined); // (2.b) createContext is like an Oven. you can't bake cake without an Oven.

export const UserAuth = (): UserContextType | undefined => {
  // don't forget to EXPORT
  return useContext(UserContext); // (3.) we put the cake in our oven by using useContext(var name.. in this case UserContext)
}; // (2.a) we want to bake the first cake now userAuth (to authenticate the user)

interface AuthContextProviderProps {
  children: ReactNode; // (5.) just imagine "children" to be the restaurant placing an order
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isLoggedOut, setIsLoggedOut] = useState(false); // (6.) So they order a wedding cake

  // below is a new function (useEffect) to know if the user is logged in or out TS.54:07
  const [user, setUser] = useState<any>(null); // You might want to replace 'any' with a specific type if you know the structure of your user data

  // TS.55:20 this useEffect will keep user's record even after a reload of a page by storing the value user in Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      if (currentUser) {
        setIsLoggedOut(true);
        onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
          setUser(doc.data());
        });

        console.log("it ran again");
      } else {
        setIsLoggedOut(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedOut, user }}>
      {children}
    </UserContext.Provider>
  ); // (7.) So we go to our bakery and retrieve the wedding cake by using UserContext.Provider and stating the kind of cake we want which is wedding.
} // (4.) This is the first restaurant we would love to sell the cake to NOT THAT IT MUST BE A FUNCTION LIKE THIS

// Important Note!!
// 1. You are Exporting two things UserAuth and AuthContextProvider
