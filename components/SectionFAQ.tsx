import Accordion from "./Accordion";
import Card from "./Card";

const SectionFAQ = () => {
  return (
    <Card title="Frågor & Svar">
      <div className="flex flex-col gap-2">
        <Accordion panel="hej hej" title="Hur tar jag mig till bröllopet?" />
        <Accordion panel="hej hej" title="Hur gör jag om jag vill hålla tal?" />
        <Accordion panel="hej hej" title="Var kan jag sova?" />
        <Accordion
          panel="hej hej"
          title="Kan man parkera bilen och hämta den dagen efter?"
        />
        <Accordion panel="hej hej" title="Vad för klädkod kommer det vara?" />
        <Accordion
          panel="hej hej"
          title="Vem kontaktar jag om jag är allergisk mot något?"
        />
        <Accordion panel="hej hej" title="Får jag ta med mina barn?" />
      </div>
    </Card>
  );
};

export default SectionFAQ;
