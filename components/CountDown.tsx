import { useEffect, useState } from "react";
import { Time } from "../util/types";
import { useTimeLeft } from "../util/helper_functions";

const CountDown: React.FC = () => {
  const weddingDate = "Jul 19, 2023 14:00:00";
  const [timeLeft, setTimeLeft] = useState<Time | null>(
    useTimeLeft(weddingDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(useTimeLeft(weddingDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {timeLeft ? (
        <div className="flex gap-2">
          <p>{timeLeft.days}</p>
          <p>{timeLeft.hours}</p>
          <p>{timeLeft.minutes}</p>
          <p>{timeLeft.seconds}</p>
        </div>
      ) : (
        <div className="h-6" />
      )}
    </div>
  );
};

export default CountDown;
