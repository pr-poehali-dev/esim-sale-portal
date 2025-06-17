import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Purchase from "@/components/Purchase";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Purchase />
      <FAQ />
    </div>
  );
};

export default Index;
