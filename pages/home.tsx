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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Nunito+Sans:wght@200;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="lg:grid lg:grid-cols-5 lg:gap-2 mx-2 lg:mx-0">
        <div
          className="hidden lg:block bg-repeat-y"
          style={{ backgroundImage: "url(/left-column.svg)" }}
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
