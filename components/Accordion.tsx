import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

interface AccordionProps {
  summary: string;
  text?: string;
}

const Accordion = (props: AccordionProps) => {
  const { summary, text } = props;
  return (
    <details className="w-full">
      <summary className="group text-zinc-600 italic font-light text-xl bg-violet-100 hover:bg-violet-200 rounded py-4 px-2 list-none flex justify-between gap-2 items-center cursor-pointer shadow-button shadow-violet-400">
        {summary}
        <FontAwesomeIcon
          id="summery-icon"
          icon={faChevronCircleDown}
          className="text-2xl text-violet-300 group-hover:text-violet-400"
        />
      </summary>
      <p className="pl-4 pr-2 mt-2 ml-1 rounded border-l-4 border-solid border-amber-400 bg-amber-100 text-xl font-extralight">
        {text ??
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
      </p>
    </details>
  );
};

export default Accordion;
