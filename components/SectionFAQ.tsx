import Accordion from "./Accordion";
import Card from "./Card";
import faqData from "../public/faq.json";

const SectionFAQ = () => {
  const data = faqData;
  console.log(data);
  return (
    <Card title="Frågor & Svar">
      <div className="flex flex-col gap-2">
        {data.map(({ question, answare }) => (
          <Accordion title={question} panel={answare} />
        ))}
      </div>
    </Card>
  );
};

export default SectionFAQ;
