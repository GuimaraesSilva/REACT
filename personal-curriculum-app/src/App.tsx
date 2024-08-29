import "./App.css";
import NavBar from "./components/HomePage/NavBar/NavBar";
import About from "./components/HomePage/About/About";
import Banner from "./components/HomePage/Banner/Banner";
import Profile from "./components/HomePage/Profile/Profile";
import Services from "./components/HomePage/Services/Services"
import Projects from "./components/HomePage/Projects/Projects";
import Footer from "./components/HomePage/Footer/Footer";




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

      <Footer />
    </>
  );
}

export default App;