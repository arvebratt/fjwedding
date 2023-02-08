import ImageCard from "./ImageCard";

const SectionImageGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row gap-10">
      <div className="max-w-xs flex flex-col gap-10">
        <ImageCard src={"/watching.jpg"} shadowColor={"violet"} />
        <ImageCard src={"/behind.jpg"} shadowColor={"violet"} />
      </div>
      <div className="max-w-xs">
        <ImageCard src={"/balcony.jpg"} shadowColor={"violet"} />
      </div>
    </div>
  );
};

export default SectionImageGallery;
