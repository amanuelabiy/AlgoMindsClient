import Features from "./features/features";
import Hero from "./hero/hero";

function LandingPage() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
    </div>
  );
}

export default LandingPage;
