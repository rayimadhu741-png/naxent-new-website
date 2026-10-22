import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import NaxentDifference from "./Home/NaxentDifference";
import WhyNaxent from "./Home/WhyNaxent";
import BeyondLending from "./Home/BeyondLending";
import BuildMomentum from "./Home/BuildMomentum";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <NaxentDifference />
      <WhyNaxent />
      <BeyondLending />
      <BuildMomentum />
      <Footer />
    </main>
  );
}