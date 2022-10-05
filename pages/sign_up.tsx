import { useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "../context/AuthUserContext";

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

const SignUp = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();

  const { createUserWithEmailAndPassword } = useAuth();

  const onSubmit = (event) => {
    if (passwordOne === passwordTwo)
      createUserWithEmailAndPassword(
        userInfo.email,
        passwordOne,
        userInfo.firstName,
        userInfo.lastName
      )
        .then((authUser) => {
          console.log("Success. The user is created in firebase");
          router.push("/logged_in");
        })
        .catch((error) => {
          console.log(error.message);
        });
    else console.log("Password do not match");
    event.preventDefault();
  };

  return (
    <div style={{ width: "50vw", height: "50vh" }}>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={userInfo.email}
          onChange={(event) => {
            const newValue = {
              ...userInfo,
              email: event.target.value,
            };
            setUserInfo(newValue);
          }}
          name="email"
          id="signUpEmail"
          placeholder="Email"
        />

        <label>First name</label>
        <input
          type="firstName"
          value={userInfo.firstName}
          onChange={(event) => {
            const newValue = {
              ...userInfo,
              firstName: event.target.value,
            };
            setUserInfo(newValue);
          }}
          name="firstName"
          id="signUpName"
          placeholder="First name"
        />

        <label>Last name</label>
        <input
          type="lastName"
          value={userInfo.lastName}
          onChange={(event) => {
            const newValue = {
              ...userInfo,
              lastName: event.target.value,
            };
            setUserInfo(newValue);
          }}
          name="lastName"
          id="signUpLastName"
          placeholder="Last name"
        />

        <label>Password</label>

        <input
          type="password"
          name="passwordOne"
          value={passwordOne}
          onChange={(event) => setPasswordOne(event.target.value)}
          id="signUpPassword"
          placeholder="Password"
        />

        <label>Confirm Password</label>

        <input
          type="password"
          name="password"
          value={passwordTwo}
          onChange={(event) => setPasswordTwo(event.target.value)}
          id="signUpPassword2"
          placeholder="Password"
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
