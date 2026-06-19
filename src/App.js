import Header from "./components/Header";
import Hero from "./components/Hero";
import ProgramCards from "./components/ProgramCards";
import HowItWorks from "./components/ItWorks";
import Example from "./components/Example";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto min-h-screen bg-white max-w-[390px] md:max-w-[768px] lg:max-w-[1200px]">
      <Header />
      <Hero />
      <ProgramCards />
      <HowItWorks />
      <Example />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;