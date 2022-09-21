import Navbar from "./components/Navbar";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Feedback from "./components/Feedback";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Feedback />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
