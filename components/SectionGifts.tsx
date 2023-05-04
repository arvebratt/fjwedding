import Accordion from "./Accordion";
import Card from "./Card";
import funData from "../public/fun.json";

const SectionGifts = () => {
  return (
    <Card title="Bröllopspresenter">
      <p className="font-normal text-2xl font-extralight text-zinc-600 text-center">
        Den finaste gåvan är att fira vår dag tillsammans med er!
        <br />
        <br />
        Genom åren har vi samlat på oss fler prylar än vad vi får plats med, men
        vill ni ändå uppmärksamma vår dag med en gåva uppskattar vi ett bidrag
        till vår bröllopsresa eller upplevelser.
      </p>
    </Card>
  );
};

export default SectionGifts;
