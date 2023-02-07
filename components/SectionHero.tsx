import ImageCard from "./ImageCard";

const SectionHero = () => {
  return (
    <div className="my-32 md:my-0 sm:h-screen sm:justify-center flex flex-col gap-10 items-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="text-center z-10 text-zinc-600">
          <div className="font-fancy text-zinc-600 leading-[160px] flex flex-col sm:flex-row justify-center items-center sm:items-baseline gap-2 sm:gap-5 pb-8">
            <h1 className="text-8xl">Fredrik</h1>
            <h1 className="text-5xl">&</h1>
            <h1 className="text-8xl">Josefine</h1>
          </div>
          <p className="text-xl font-normal font-extralight">
            den 19 Juli 2023
          </p>
          <h2 className="text-3xl font-normal font-base">
            Välkomna att fira med oss när vi gifter oss!
          </h2>
        </div>
        <div className="max-w-xs">
          <ImageCard
            src="/front.jpg"
            alt="picture of the couple"
            shadowColor="violet"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
