import AboutUs from "./aboutUs/AboutUs";
import EmailMessages from "./emailMessages/EmailMessages";
import Features from "./features/features";
import Hero from "./hero/hero";

function LandingPage() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <AboutUs />
      <EmailMessages />
    </div>
  );
}

export default LandingPage;
