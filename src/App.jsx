import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
// import Test from "./Test"

const App = () => {
  return <div>
    {/* <h1>Hello</h1> */}
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    {/* <section id="Services"><Parallax type="services"/></section> */}
    <section id="About"><About/></section>
    <section id="Portfolio"><Parallax type="services"/></section>
    <section id="Skills"><Services/></section>
    <section id="Projects"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact"><Contact/></section>
  </div>;

};

export default App;
