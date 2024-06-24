import { useEffect } from "react";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";
import Intro from "./Components/Intro/Intro";
import NavBar from "./Components/Nabar/NavBar";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Work from "./Components/Works/Work";
import Footer from "./Components/footer/Footer";
import Portfolio from "./Components/portfolio/Portfolio";


function App() {
  useEffect(()=>{
    document.title ='nimna navannaja'
  },[])
  return (
    <div className="App">

      <NavBar />
      <Intro />
      <Services />
      <Experience />
      <Work />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
