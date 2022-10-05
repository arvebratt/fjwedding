import firebase from "firebase/compat/app";

export type User = {
  uid: string | null
  email: string | null
}

export type AuthUserContext= {
  authUser: User | null,
  loading: boolean,
  signInWithEmailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential|void>,
  createUserWithEmailAndPassword: (email: string, password: string, firstName: string, lastName: string) => Promise<firebase.auth.UserCredential|void>,
  signOut: () => Promise<void>,
}


export type Time = {
  days: number,
  hours: number,
  minutes: number,
  seconds: number

}

export enum Routes {
  home = "home",
  info = "info",
  music = "music",
  registry = "registry",
  images = "images"
} 