import { useState } from "react";
import Button from "./Button";
import DialogModal from "./DialogModal";

const SectionRSVP = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div className="bg-violet-50 text-center p-4 rounded-xl shadow-card shadow-violet-200 mr-2 mb-2">
        <h2 className="font-fancy text-4xl text-zinc-600">OSA</h2>
        <h2 className="font-normal text-2xl font-extralight text-zinc-600 mb-4">
          Vänligen ge besked om du kan vara med och fira vår dag!
        </h2>
        <Button
          label="Anmäl ditt deltagande"
          version="secondary"
          id="showDialogButton"
          onClick={() => setOpenModal(true)}
        />
      </div>
      <DialogModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default SectionRSVP;
