import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Purchase from "@/components/Purchase";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="purchase">
        <Purchase />
      </div>
      <div id="faq">
        <FAQ />
      </div>
    </div>
  );
};

export default Index;
