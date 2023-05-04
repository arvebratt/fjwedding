import Footer from "../components/Footer";
import SectionFAQ from "../components/SectionFAQ";
import SectionHero from "../components/SectionHero";
import SectionImageGallery from "../components/SectionImageGallery";
import SectionInfo from "../components/SectionInfo";
import SectionMusic from "../components/SectionMusic";
import SectionRSVP from "../components/SectionRSVP";
import SectionTM from "../components/SectionTM";
import SectionWhenWhere from "../components/SectionWhenWhere";
import HoverAnimation from "../components/HoverAnimation";
import SectionFun from "../components/SectionFun";
import SectionGifts from "../components/SectionGifts";

const Home = () => {
  return (
    <>
      <HoverAnimation />
      <div className="lg:grid lg:grid-cols-5 lg:gap-2 mx-2 lg:mx-0">
        <div
          className="hidden lg:block bg-repeat-y"
          style={{ backgroundImage: "url(/left-column.svg)" }}
        />
        <div
          className="absolute lg:hidden top-0 left-0 w-screen h-screen z-0 bg-no-repeat"
          style={{ backgroundImage: "url(/top-row.svg)" }}
        />
        <div className="lg:col-span-3 flex flex-col gap-20 my-20">
          <SectionHero />
          {/* <SectionRSVP /> */}
          <SectionGifts />
          <SectionImageGallery />
          <SectionMusic />
          <SectionTM />
          <SectionWhenWhere />
          <SectionFun />
          <SectionFAQ />
          <SectionInfo />
        </div>
        <div
          className="hidden lg:block bg-repeat-y"
          style={{ backgroundImage: "url(/right-column.svg)" }}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
