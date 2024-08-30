import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/AboutComponent";
import Banner from "./components/Banner/Banner";
import Profile from "./components/Profile/Profile";
import Services from "./components/Services/Services"
import Projects from "./components/Projects/Projects";
import Client from "./components/Clientes/Client";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <>
      <NavBar />
      <About
        bioJob="Full Strack - Frontend"
        bioName="Fábio Silva"
        bioDescription="Bee the change you want to see in the world"
      />
      <Banner/>
      <Projects/>
      <Projects/>
      <Projects/>
      <Services/>
      <Profile/>
      <Client/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;