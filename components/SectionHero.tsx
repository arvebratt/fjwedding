import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageCard from "./ImageCard";

const SectionHero = () => {
  return (
    <div className="my-10 sm:my-0 sm:h-screen sm:justify-center flex flex-col gap-10 items-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="text-center z-10 text-zinc-600">
          <h1 className="text-7xl italic font-extrabold text-violet-400 drop-shadow-[4px_4px_0px_rgba(251,191,36,1)]">
            Fredrik & Josefine
          </h1>
          <p className="text-xl font-extralight">den 19 Juli 2023</p>
          <h2 className="mt-10 text-3xl font-light">
            Välkommen att fira med oss när vi gifter oss!
          </h2>
        </div>
        <div className="max-w-xs pr-3">
          <ImageCard
            src="/small-background.jpg"
            alt="picture of the couple"
            shadowColor="violet"
          />
        </div>
      </div>
      <FontAwesomeIcon
        id="summery-icon"
        icon={faChevronDown}
        className="text-5xl text-violet-300 animate-bounce"
      />
    </div>
  );
};

export default SectionHero;
