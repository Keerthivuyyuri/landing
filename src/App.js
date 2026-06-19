import Header from "./components/Header";
import Hero from "./components/Hero";
import ProgramCards from "./components/ProgramCards";
import HowItWorks from "./components/ItWorks";
import Example from "./components/Example";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
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