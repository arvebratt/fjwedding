import { createContext, useContext, Context } from "react";
import useFirebaseAuth from "../lib/useFirebaseAuth";
import { AuthUserContext } from "../util/types";

const authUserContext = createContext<AuthUserContext>({
  authUser: null,
  loading: true,
  signInWithEmailAndPassword: async (email: string, password: string) => {},
  createUserWithEmailAndPassword: async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {},
  signOut: async () => {},
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export const useAuth = () => useContext(authUserContext);
