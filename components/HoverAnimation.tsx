import { useRef } from "react";
import { useMousePosition } from "../hooks/useMousePosition";

const HoverAnimation = () => {
  const { x, y } = useMousePosition();
  const blob = useRef(null);

  if (blob.current !== null) {
    blob.current.animate(
      { top: `${y}px`, left: `${x}px`, translate: `-50% -50%` },
      { duration: 3000, fill: "forwards" }
    );
  }

  return (
    <>
      <div className="-z-[1] hidden sm:block fixed w-screen h-screen backdrop-blur-[200px] top-0 left-0" />
      <div
        ref={blob}
        className="-z-[2] min-h-[40vh] aspect-square bg-gradient-to-r hidden sm:block fixed top-1/2 left-1/2 rounded-full from-sky-300 via-purple-300 to-pink-300 animate-spin-slow"
      />
    </>
  );
};

export default HoverAnimation;
