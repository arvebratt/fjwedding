interface ImageCardProps {
  src: string;
  alt?: string;
  shadowColor: "violet" | "amber";
}
const ImageCard = (props: ImageCardProps) => {
  const { src, alt, shadowColor } = props;

  return (
    <div
      className={`w-full rounded-lg shadow-card ${
        shadowColor === "violet" ? "shadow-violet-200" : "shadow-amber-400"
      }`}
    >
      <img src={src} alt={alt} className="w-full relative rounded-lg" />
    </div>
  );
};

export default ImageCard;
