import { useState, useEffect } from "react";
import { Time } from "../util/types";
import { useTimeLeft } from "../util/helper_functions";

const CountDown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<Time | null>(null);
  const weddingDate = "Jul 19, 2023 14:00:00";

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(useTimeLeft(weddingDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);
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
        <p>Not rendered</p>
      )}
    </div>
  );
};

export default CountDown;
