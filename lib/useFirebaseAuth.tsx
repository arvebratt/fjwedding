import { useState, useEffect } from "react";
import { User } from "../util/types";
import firebase from "./firebase";
const formatAuthUser = (user: User) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState: firebase.User) => {
    if (!authState) {
      setLoading(false);
    } else {
      setLoading(true);
      var formattedUser = formatAuthUser(authState);
      setAuthUser(formattedUser);
      setLoading(false);
    }
  };

  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email: string, password: string) =>
    firebase.auth().signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (
    email: string,
    password: string,
    firstName: string,
    lastName: string
    // phoneNumber: string
  ) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function (firebaseUser) {
        firebaseUser.user.updateProfile({
          displayName: `${firstName} ${lastName}`,
        });
        // firebaseUser.user.updatePhoneNumber(phoneCredential: phoneNumber);
      });

  const signOut = () => firebase.auth().signOut().then(clear);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}
