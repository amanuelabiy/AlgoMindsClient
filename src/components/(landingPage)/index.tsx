import Footer from "../footer/Footer";
import AboutUs from "./aboutUs/AboutUs";
import Faq from "./faq/Faq";
import ProblemsFaced from "./problemsFaced/ProblemsFaced";
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";
import Pricing from "./pricing/Pricing";

function LandingPage() {
  return (
    <div
      className="w-full min-h-screen overflow-x-hidden"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(246,251,255,1) 19%, rgba(243,250,255,1) 28%, rgba(240,249,255,1) 39%, rgba(225,243,255,1) 81%, rgba(218,240,255,1) 90%, rgba(175,224,255,1) 100%)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-[1600px] mx-auto w-full">
        <Navbar />
        <Hero />
        <div className="mt-8 rounded-full">
          <ProblemsFaced />
        </div>
        <AboutUs />
        <Pricing />

        <Faq />

        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
