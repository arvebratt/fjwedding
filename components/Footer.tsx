import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="bg-[#80AD9E] flex flex-col gap-1 sm:gap-4 sm:flex-row justify-center items-center w-full py-2">
      <p className="text-lg font-normal text-white">
        Created by Alexander Arvebratt
      </p>
      <div className="flex justify-center">
        <a href="https://github.com/arvebratt">
          <FontAwesomeIcon
            icon={faSquareGithub}
            className="text-2xl text-white w-8"
          />
        </a>
        <a href="https://www.linkedin.com/in/arvebratt/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-2xl text-white w-8"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
