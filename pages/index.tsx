import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../context/AuthUserContext";
import InputField from "../components/InputField";
import Logo from "../components/Logo";
import CountDown from "../components/CountDown";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [modalState, setModalState] = useState<"open" | "closed">("closed");
  const router = useRouter();
  const { signInWithEmailAndPassword } = useAuth();

  function toggleModal() {
    setModalState((currentState) =>
      currentState === "open" ? "closed" : "open"
    );
  }

  const onSubmit = (event) => {
    setError(null);
    signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        router.push("/home");
      })
      .catch((error) => {
        setError(error.message);
      });
    event.preventDefault();
  };

  return (
    <div>
      <div className="flex flex-col gap-4 h-screen justify-center items-center bg-violet-100 text-zinc-600">
        <Logo />
        <CountDown />
        <form onSubmit={onSubmit} className="flex flex-col gap-2">
          <InputField
            name="email"
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <InputField
            name="password"
            label="Lösenord"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button label="Logga in" type="primary" />
        </form>
        <span>
          Inget konto? Skapa ett&nbsp;
          <a className="cursor-pointer underline" onClick={toggleModal}>
            här!
          </a>
        </span>
      </div>
      <Modal
        title="Skapa ett konto"
        subTitle="Det är snabbt och enkelt"
        modalState={modalState}
        toggleModal={toggleModal}
      />
    </div>
  );
}
