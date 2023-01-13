import Accordion from "./Accordion";

const SectionFAQ = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mb-20">
      <h2 className="text-4xl font-extralight">Frågor & Svar</h2>
      <Accordion summary="Hur tar jag mig till bröllopet?" />
      <Accordion summary="Hur gör jag om jag vill hålla tal?" />
      <Accordion summary="Var kan jag sova?" />
      <Accordion summary="Kan man parkera bilen och hämta den dagen efter?" />
      <Accordion summary="Vad för klädkod kommer det vara?" />
      <Accordion summary="Vem kontaktar jag om jag är allergisk mot något?" />
      <Accordion summary="Får jag ta med mina barn?" />
    </div>
  );
};

export default SectionFAQ;
