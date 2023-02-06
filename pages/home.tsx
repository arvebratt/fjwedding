import Head from "next/head";
import Footer from "../components/Footer";
import SectionFAQ from "../components/SectionFAQ";
import SectionHero from "../components/SectionHero";
import SectionImageGallery from "../components/SectionImageGallery";
import SectionInfo from "../components/SectionInfo";
import SectionRSVP from "../components/SectionRSVP";
import SectionTM from "../components/SectionTM";
import SectionWhenWhere from "../components/SectionWhenWhere";

const Home = () => {
  return (
    <>
      <Head>
        <title>FJ wedding</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;1,300&family=Herr+Von+Muellerhoff&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <div className="lg:grid lg:grid-cols-5 lg:gap-2 mx-2 lg:mx-0">
        <div
          className="hidden lg:block bg-repeat-y"
          style={{ backgroundImage: "url(/left-column.svg)" }}
        />
        <div
          className="absolute lg:hidden top-0 left-0 w-screen h-screen z-0 bg-no-repeat"
          style={{ backgroundImage: "url(/top-row.svg)" }}
        />
        <div className="lg:col-span-3">
          <SectionHero />
          <SectionRSVP />
          <SectionImageGallery />
          <SectionWhenWhere />
          <SectionTM />
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
