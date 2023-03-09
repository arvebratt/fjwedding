import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import InputField from "../InputField";
import TextArea from "../TextArea";
import Checkbox from "../Checkbox";
import Modal from "./Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const RsvpModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal title="Registrera ert deltagande" isOpen={isOpen} onClose={onClose}>
      <div className="mt-2">
        <p className="font-normal text-zinc-600">
          Registrera er i formuläret nedan. För att registrera fler gäster,
          skriv allas för- och efternamn i fältet nedan med ett kommatecken
          emellan. Vid matpreferenser/allergier, specifiera för vem det gäller.
          Ni kommer motta mejl med uppdatering angående bröllopet!
        </p>
        <form
          onSubmit={onClose}
          name="rsvpToWedding"
          method="POST"
          action="/home"
          data-netlify="true"
          className="flex flex-col gap-2 mt-4"
        >
          <input type="hidden" name="form-name" value="rsvpToWedding" />
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
          <div className="flex flex-col gap-1 my-2">
            <Checkbox
              name="attending"
              label="Kommer ni kunna delta på bröllopet?"
            />
            <Checkbox
              name="busFromWedding"
              label="Vill ni åka med i bussen efter bröllopet?"
            />
          </div>
          <TextArea
            name="preferences"
            label="Matpreferenser/Allergi (Vid fler anmälda specifiera vem det gäller)"
            placeholder="John doe: vegetariskt..."
          />
          <div className="max-w-xs ml-1 mt-4 flex gap-2">
            <Button
              version="secondary"
              type="submit"
              label="Skicka"
              buttonSize="sm"
            />
            <Button
              version="primary"
              type="button"
              label="Avbryt"
              buttonSize="sm"
              onClick={onClose}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default RsvpModal;
