import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Disclosure, Transition } from "@headlessui/react";

interface AccordionProps {
  title: string;
  panel: string;
}

const Accordion = (props: AccordionProps) => {
  const { title, panel } = props;
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between items-center rounded-lg bg-violet-200 px-4 py-2 text-left text-lg font-normal text-zinc-600 hover:bg-violet-300 focus:outline-none focus-visible:ring focus-visible:ring-violet-500 focus-visible:ring-opacity-75">
            <span>{title}</span>
            <FontAwesomeIcon
              icon={faChevronUp}
              className={`${
                open ? "rotate-180 transform" : ""
              } text-lg text-violet-100`}
            />
          </Disclosure.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="py-2 px-4 font-normal text-zinc-600 text-left">
              {panel}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
