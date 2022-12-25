import "./App.css";
import HeroSection from "./component/HeroSection/HeroSection";
import Slider from "./component/Reviews/Slider";
import Surgery from "./component/Surgery/Surgery";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Surgery />
      <Slider />
    </div>
  );
}

export default App;
