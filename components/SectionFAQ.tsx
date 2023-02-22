import Accordion from "./Accordion";
import Card from "./Card";
import faqData from "../public/faq.json";

const SectionFAQ = () => {
  return (
    <Card title="Frågor & Svar">
      <div className="flex flex-col gap-2">
        {faqData.map(({ question, answare }, index) => (
          <Accordion title={question} panel={answare} key={index} />
        ))}
      </div>
    </Card>
  );
};

export default SectionFAQ;
