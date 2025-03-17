import Footer from "../footer/Footer";
import AboutUs from "./aboutUs/AboutUs";
import ProblemsFaced from "./features/ProblemsFaced";
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";
import Pricing from "./pricing/Pricing";

function LandingPage() {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(246,251,255,1) 19%, rgba(243,250,255,1) 28%, rgba(240,249,255,1) 39%, rgba(225,243,255,1) 81%, rgba(218,240,255,1) 90%, rgba(175,224,255,1) 100%)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <Hero />
      <div className=" bg-[#edf7ff]">
        <ProblemsFaced />
      </div>
      <AboutUs />
      <Pricing />

      <Footer />
    </div>
  );
}

export default LandingPage;
