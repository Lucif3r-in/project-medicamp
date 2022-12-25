
import "./App.css";
import Footer from "./component/Footer/Footer";
import HeroSection from "./component/HeroSection/HeroSection";
import Navbar from "./component/Navbar/Navbar"
import Slider from "./component/Reviews/Slider";
import Surgery from "./component/Surgery/Surgery";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
      <Surgery />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
