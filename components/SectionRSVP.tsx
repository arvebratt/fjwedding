import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import RsvpModal from "./modal/RsvpModal";

const SectionRSVP = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Card title="OSA">
        <>
          <h2 className="font-normal text-2xl font-extralight text-zinc-600 mb-4">
            Vänligen ge besked om du kan vara med och fira vår dag!
          </h2>
          <Button
            label="Anmäl ditt deltagande"
            version="secondary"
            id="showDialogButton"
            onClick={() => setOpenModal(true)}
          />
        </>
      </Card>
      <RsvpModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default SectionRSVP;
