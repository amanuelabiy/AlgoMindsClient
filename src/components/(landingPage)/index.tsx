import Footer from "../footer/Footer";
import AboutUs from "./aboutUs/AboutUs";
import EmailMessages from "./emailMessages/EmailMessages";
import Features from "./features/features";
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar";

function LandingPage() {
  return (
    <div
      className="w-full"
      style={{
        background:
          "conic-gradient(from 180deg at 50% 50%, #FFF 0deg, #FFF 144deg, #B0D4E8 288deg, #6BA8D8 306deg, #2980B9 360deg)",
      }}
    >
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <EmailMessages />
      <Footer />
    </div>
  );
}

export default LandingPage;
