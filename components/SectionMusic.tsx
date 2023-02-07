import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import MusicModal from "./modal/MusicModal";

const SectionMusic = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <Card title="Önska Musik">
        <>
          <h2 className="font-normal text-2xl font-extralight text-zinc-600 mb-4">
            Om ni har någon låt som ni vill ska spelas under kvällen så kan ni
            skicka en förfrågan här!
          </h2>
          <Button
            label="Anmäl en låt"
            version="secondary"
            onClick={() => setOpenModal(true)}
          />
        </>
      </Card>
      <MusicModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default SectionMusic;
