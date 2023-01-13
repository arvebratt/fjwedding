import ImageCard from "./ImageCard";

const SectionImageGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row gap-10 mr-2 my-10 md:my-20">
      <div className="max-w-xs">
        <ImageCard src={"/small-background.jpg"} shadowColor={"violet"} />
      </div>
      <div className="max-w-xs">
        <ImageCard src={"/small-background.jpg"} shadowColor={"amber"} />
      </div>
    </div>
  );
};

export default SectionImageGallery;
