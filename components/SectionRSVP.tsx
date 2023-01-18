import { useState } from "react";
import Button from "./Button";
import DialogModal from "./DialogModal";

const SectionRSVP = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

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
          version="secondary"
          id="showDialogButton"
          onClick={() => setOpenModal(true)}
          // onClick={() => setOpenModal(openModal === "open" ? "closed" : "open")}
        />
      </div>
      <DialogModal
        isOpened={openModal}
        // onProceed={onProceed}
        onClose={() => setOpenModal(false)}
      />
      {/* <ModalRSVP
        modalState={openModal}
        toggleModal={() =>
          setOpenModal(openModal === "open" ? "closed" : "open")
        }
      /> */}
    </>
  );
};

export default SectionRSVP;
