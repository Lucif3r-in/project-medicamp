
import "./App.css";
import Footer from "./component/Footer/Footer";
import HeroSection from "./component/HeroSection/HeroSection";
import Navbar from "./component/Navbar/Navbar"
import Slider from "./component/Reviews/Slider";
import Surgery from "./component/Surgery/Surgery";
import Form from "./component/form/Form";
import BasicTimeline from "./component/timeline/Timeline";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection />
      <div className="flex items-center justify-around">
      <Surgery />
        <Form/>
      </div>
      <Slider />
      <div className="mt-10 ml-5">
      <BasicTimeline/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
