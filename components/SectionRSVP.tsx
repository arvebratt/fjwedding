import { useState } from "react";
import Button from "./Button";
import ModalRSVP from "./ModalRSVP";

const SectionRSVP = () => {
  const [openModal, setOpenModal] = useState<"open" | "closed">("closed");
  return (
    <>
      <div className="bg-violet-100 text-center p-4 rounded-xl shadow-card shadow-violet-400 mr-2 mb-2">
        <h1 className="text-3xl text-zinc-600 underline decoration-violet-400">
          OSA
        </h1>
        <h2 className="text-xl font-extralight text-zinc-600 mb-4">
          Vänligen ge besked om du kan vara med och fira vår dag!
        </h2>
        <Button
          label="Anmäl ditt deltagande"
          type="secondary"
          onClick={() => setOpenModal(openModal === "open" ? "closed" : "open")}
        />
      </div>
      <ModalRSVP
        modalState={openModal}
        toggleModal={() =>
          setOpenModal(openModal === "open" ? "closed" : "open")
        }
      />
    </>
  );
};

export default SectionRSVP;
