import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import InputField from "./InputField";
import TextArea from "./TextArea";
import axios from "axios";

// const encode = (data) => {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

interface IFormData {
  name: string;
  email: string;
  number: string;
  attending: "false" | "true";
  preferences: string;
}

interface IFormDataPayload extends IFormData {
  "form-name": string;
}

const encode = (data: IFormDataPayload) => {
  return Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          data[key as keyof IFormDataPayload]
        )}`
    )
    .join("&");
};

type Props = {
  isOpened: boolean;
  // onProceed: () => void;
  onClose: () => void;
};

const DialogModal = ({ isOpened, onClose }: Props) => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    number: "",
    attending: "false",
    preferences: "",
  });

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  function handleSubmit(e: React.FormEvent) {
    const axiosConfig = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    };
    console.log("hej");

    axios
      .post(
        "/",
        encode({
          "form-name": "wedding-rsvp",
          ...formData,
        }),
        axiosConfig
      )
      .then(() => alert("Thank you, message sent!"))
      .catch((error) => alert(error));

    e.preventDefault();
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", ...this.state }),
    // })
    //   .then(() => alert("Success!"))
    //   .catch((error) => alert(error));

    // e.preventDefault();
  }

  const proceedAndClose = () => {
    // onProceed();
    onClose();
  };

  const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <dialog
      className="bg-amber-100 shadow-card shadow-amber-400 -left-2 w-screen rounded backdrop:bg-black/30"
      ref={ref}
      onCancel={onClose}
      onClick={onClose}
    >
      <div onClick={preventAutoClose}>
        <h1 className="text-3xl text-center text-zinc-600 underline decoration-violet-400">
          Registrering
        </h1>
        <p className="text-xl font-extralight text-zinc-600 mb-4">
          Registrera er nedan och fyll i vis matpreferenser/allergier. För att
          registrera fler gäster, skriv allas för-och efternamn i fältet nedan
          med ett kommatecken emellan. Vid matpreferenser/allergier, specifiera
          för vem det gäller. Ni kommer motta mejl med mer info efter OSA-datum!
        </p>
        <form
          name="wedding-rsvp"
          method="dialog"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-2 px-2 md:px-48"
        >
          <input type="hidden" name="form-name" value="ask-question" />
          <InputField
            name="name"
            label="Ditt/Era för- och efternamn"
            placeholder="John Doe, Jane Doe"
            icon={faUser}
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <InputField
            name="email"
            label="Epost"
            placeholder="john@doe.com"
            icon={faEnvelope}
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <InputField
            name="phone"
            label="Telefonnummer"
            placeholder="+467..."
            icon={faPhone}
            type="text"
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.value })
            }
            required
          />
          <Checkbox
            name="attendance"
            label="Kommer du/ni på bröllopet?"
            leftText="Nej"
            rightText="Ja"
            // value={formData.attending}
            // onChange={(e) =>
            //   setFormData({ ...formData, attending: e.target.value })
            // }
          />
          <TextArea
            name="preferences"
            form="wedding-rsvp"
            label="Matpreferenser/Allergi (Vid fler anmälda specifiera vem det gäller)"
            placeholder="John doe: vegetariskt..."
            value={formData.preferences}
            onChange={(e) =>
              setFormData({ ...formData, preferences: e.target.value })
            }
          />
          <div className="flex justify-center items-center gap-2 my-4 px-2 md:px-48">
            <Button version="secondary" type="submit" label="Skicka" />
            {/* <Button
              version="secondary"
              type="reset"
              form="wedding-rsvp"
              onClick={onClose}
              label="Avsluta"
            /> */}
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default DialogModal;
