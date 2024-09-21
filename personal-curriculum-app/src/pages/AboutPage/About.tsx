import "./About.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/FooterComponent";
import BioImage from "../../components/BioImage/BioImage";
import BioTitle from "../../components/BioTitle/BioTitleComponent";
import BioDescription from "../../components/BioDescription/BioDescripitionComponent";
import Credentials from "../../components/Credentials/CredentialsComponent";
import SocialComponent from "../../components/SocialComponent/SocialComponent";
import ContactComponent from "../../components/Contact/ContactComponent";
import SimpleContainer from "../../components/SimpleContainer/SimpleContainer";
import aboutMeImage from "../../assets/about-me.jpg";

function About() {
  let educationItems = [
    {
      year: "2013 - 2020",
      job: "Engenharia Civil",
      place: "Instituto Superior Engenaria",
    },
    {
      year: "2017 (50 hours)",
      job: "AutoCad Course",
      place: "Instituto Superior Engenaria",
    },
    {
      year: "2019 (25 hours)",
      job: "SolidWorks Course",
      place: "Squedio",
    },
  ];

  let experienceItems = [
    {
      year: "2024 - Present",
      job: "Qotation",
      place: "JetClass Group",
    },
    {
      year: "2023 - 2024",
      job: "Innovation and Continuous Improvement Team",
      place: "AIV - Art in Vogue",
    },
    {
      year: "2019 - 2023",
      job: "Produt Engineer",
      place: "Zollern & Comandita - Precision Foundry",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="grid-container">
        <div className="row1about">
          <div className="row1col1about">
            <BioImage />
          </div>
          <div className="row1col2about">
            <BioTitle titleText="SELF-SUMMARY" />
            <div className="sub-row1about">
              <BioDescription />
            </div>
          </div>
        </div>
        <div className="row2about">
          <div className="row2col1about">
            <Credentials title="EDUCATION" items={educationItems} />
          </div>
          <div className="row2col2about">
            <Credentials title="EXPERIENCE" items={experienceItems} />
          </div>
        </div>
        <div className="row3about">
          <div className="row3col1about">
            <SocialComponent />
          </div>
          <div className="row3col2about">
            <ContactComponent />
          </div>
          <div className="row3col3about">
            <SimpleContainer
              img={aboutMeImage}
              subtitle="More about me"
              title="Credentials"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
