import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, useRef, useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import TextArea from "./TextArea";
import { Dialog, Transition } from "@headlessui/react";
import Checkbox from "./Checkbox";

interface IFormData {
  name: string;
  email: string;
  number: string;
  attending: "false" | "true";
  preferences: string;
}

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const DialogModal = ({ isOpen, onClose }: Props) => {
  const ref = useRef<HTMLDialogElement | null>(null);
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    number: "",
    attending: "false",
    preferences: "",
  });

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-5xl font-fancy text-zinc-600"
                  >
                    Registrera ert deltagande
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="font-normal text-zinc-600">
                      Registrera er nedan och fyll i vis
                      matpreferenser/allergier. För att registrera fler gäster,
                      skriv allas för-och efternamn i fältet nedan med ett
                      kommatecken emellan. Vid matpreferenser/allergier,
                      specifiera för vem det gäller. Ni kommer motta mejl med
                      mer info efter OSA-datum!
                    </p>
                    <form
                      onSubmit={onClose}
                      name="rsvpToWedding"
                      method="POST"
                      action="/home"
                      data-netlify="true"
                      className="flex flex-col gap-2 mt-4"
                    >
                      <input
                        type="hidden"
                        name="form-name"
                        value="rsvpToWedding"
                      />
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
                          name="busToWedding"
                          label="Vill ni åka med i bussen till bröllopet?"
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DialogModal;
