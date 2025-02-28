import AboutUs from "./aboutUs/AboutUs";
import Features from "./features/features";
import Hero from "./hero/hero";

function LandingPage() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <AboutUs />
    </div>
  );
}

export default LandingPage;
