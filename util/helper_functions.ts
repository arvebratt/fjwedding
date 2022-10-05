import { useEffect, useState } from "react";
import { Time } from "./types";

export const useTimeLeft = (endDate: string): Time => {
    const end = new Date(endDate).getTime();
    const now = new Date().getTime();
    // Find the distance between now and the count down date
    const distance = end - now;
    // Time calculations for days, hours, minutes and seconds
    const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

    return {days: daysLeft, hours: hoursLeft, minutes: minutesLeft, seconds: secondsLeft}
}

type WindowDimentions = {
    width: number | undefined;
    height: number | undefined;
};

export const useWindowDimensions = (): WindowDimentions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowDimensions;
};

export default useWindowDimensions;
