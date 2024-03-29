import {
  faEnvelope,
  faLocationPin,
  faPhone,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

const SectionInfo = () => {
  return (
    <Card title="Info">
      <div className="flex flex-col items-center">
        <div>
          <div className="flex justify-start gap-8 my-2">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-2xl text-violet-200 w-8"
            />
            <p className="text-xl font-normal text-zinc-600">
              Vid frågor, kontakta våra Toastmasters
            </p>
          </div>
          <div className="flex justify-start gap-8 my-2">
            <FontAwesomeIcon
              icon={faLocationPin}
              className="text-2xl text-violet-200 w-8"
            />
            <p className="text-xl font-normal text-zinc-600">
              Ellinge Slott: Ellinge Gård, 241 93 Eslöv
            </p>
          </div>
          <div className="flex justify-start gap-8 my-2">
            <FontAwesomeIcon
              icon={faPhone}
              className="text-2xl text-violet-200 w-8"
            />
            <p className="text-xl font-normal text-zinc-600">
              Ludvig: <a href="tel:0721558860">0734424241</a> Alexander:{" "}
              <a href="tel:0721558860">0721558860</a>
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SectionInfo;
