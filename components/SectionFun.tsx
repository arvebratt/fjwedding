import Accordion from "./Accordion";
import Card from "./Card";
import funData from "../public/fun.json";

const SectionFun = () => {
  return (
    <Card title="Kul saker att hitta på i Skåne">
      <div className="flex flex-col gap-2">
        <p className="font-normal text-2xl font-extralight text-zinc-600 mb-4">
          Kära vänner och kära gäster,
          <br />
          Vi är så glada över att ni vill fira vår stora dag tillsammans med
          oss! För er som rest en bit och vill passa på att stanna några extra
          dagar vill vi gärna dela med oss av några av våra bästa tips o Skåne
        </p>
        {funData.map(({ title, activity }, index) => (
          <Accordion title={title} panel={activity} key={index} />
        ))}
      </div>
    </Card>
  );
};

export default SectionFun;
