import "./App.scss"
import { Navbar } from "./Components/navbar/Navbar";
import { Hero } from "./Components/navbar/hero/Hero";
import { Parallax } from "./Components/parallax/Parallax";
import { Portfolio } from "./Components/portfolio/Portfolio";
import { Services } from "./Components/services/Services";
import { Contact } from "./Contact/Contact";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Technologies"><Parallax type="services" /></section>
    <section><Services/></section>
    <section id="About" ><Parallax type="portfolio" />
    </section>
    <Portfolio/>
    <section id="Contact" >
      <Contact/>
    </section>
  </div>
};

export default App;
