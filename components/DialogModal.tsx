import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { Fragment, useRef, useState } from "react";
import Button from "./Button";
import InputField from "./InputField";
import TextArea from "./TextArea";
import { Dialog, Transition } from "@headlessui/react";

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
                      name="rsvp"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <input
                        type="hidden"
                        name="form-name"
                        value="ask-question"
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
                      <TextArea
                        name="preferences"
                        form="wedding-rsvp"
                        label="Matpreferenser/Allergi (Vid fler anmälda specifiera vem det gäller)"
                        placeholder="John doe: vegetariskt..."
                        value={formData.preferences}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            preferences: e.target.value,
                          })
                        }
                      />
                      <div className="w-24 ml-1 mt-4">
                        <Button
                          version="secondary"
                          type="submit"
                          label="Skicka"
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
