import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import Button from "./Button";
import Checkbox from "./Checkbox";
import InputField from "./InputField";
import TextArea from "./TextArea";

type Props = {
  isOpened: boolean;
  onProceed: () => void;
  onClose: () => void;
};

const DialogModal = ({ isOpened, onProceed, onClose }: Props) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  const proceedAndClose = () => {
    onProceed();
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
          name="rsvp"
          id="rsvp"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="flex flex-col justify-center items-center gap-2 px-2 md:px-48"
        >
          <input type="hidden" name="form-name" value="ask-question" />
          <InputField
            name="name"
            label="Ditt/Era för- och efternamn"
            placeholder="John Doe, Jane Doe"
            icon={faUser}
            type="text"
            required
          />
          <InputField
            name="email"
            label="Epost"
            placeholder="john@doe.com"
            icon={faEnvelope}
            type="email"
            required
          />
          <InputField
            name="phone"
            label="Telefonnummer"
            placeholder="+467..."
            icon={faPhone}
            type="text"
            required
          />
          <Checkbox
            name="attendance"
            label="Kommer du/ni på bröllopet?"
            leftText="Nej"
            rightText="Ja"
          />
        </form>
        <div className="flex items-center py-2 px-2 md:px-48">
          <TextArea
            name="preferences"
            form="rsvp"
            label="Matpreferenser/Allergi (Vid fler anmälda specifiera vem det gäller)"
            placeholder="John doe: vegetariskt..."
          />
        </div>
        <div className="flex justify-center items-center gap-2 my-4 px-2 md:px-48">
          <Button
            version="secondary"
            type="submit"
            form="rsvp"
            onClick={proceedAndClose}
            label="Skicka"
          />
          <Button
            version="secondary"
            type="reset"
            form="rsvp"
            onClick={onClose}
            label="Avsluta"
          />
        </div>
      </div>
    </dialog>
  );
};

export default DialogModal;
