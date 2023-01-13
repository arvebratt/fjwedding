import {
  faEnvelope,
  faLocationPin,
  faPhone,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionInfo = () => {
  return (
    <div className="bg-amber-100 flex flex-col items-center p-4 rounded-xl shadow-card shadow-amber-400 mr-2 mb-10">
      <div>
        <div className="flex justify-start gap-8 my-2">
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className="text-3xl text-violet-300 w-8"
          />
          <p className="text-xl font-extralight text-zinc-600">
            Vid frågor, kontakta våra Toastmasters
          </p>
        </div>
        <div className="flex justify-start gap-8 my-2">
          <FontAwesomeIcon
            icon={faLocationPin}
            className="text-3xl text-violet-300 w-8"
          />
          <p className="text-xl font-extralight text-zinc-600">
            Ellinge Slott: Ellinge Gård, 241 93 Eslöv
          </p>
        </div>
        <div className="flex justify-start gap-8 my-2">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-3xl text-violet-300 w-8"
          />
          <p className="text-xl font-extralight text-zinc-600">
            Alexander: 0721558860, Ludvig: 0721558860
          </p>
        </div>
        <div className="flex justify-start gap-8 my-2">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-3xl text-violet-300 w-8"
          />
          <p className="text-xl font-extralight text-zinc-600">
            toastmasters@fjwedding.se
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
