import BioContainer from "../../components/BioContainerComponent/BioContainer";
import NavBar from "../../components/NavBar/NavBar";
import SimpleContainer from "../../components/SimpleContainer/SimpleContainer";
import aboutMeImage from "../../assets/about-me.jpg";
import projectsImage from "../../assets/projects.jpg";
import Links from "../../components/LinksComponent/LinksComponent";
import blogImage from "../../assets/blog-image.jpg";
import Footer from "../../components/Footer/FooterComponent";
import ServicesComponent from "../../components/ServicesComponent/ServicesComponent";
import SocialContainer from "../../components/SocialComponent/SocialComponent";
import DataComponent from "../../components/DataComponent/DataComponent";
import ContactComponent from "../../components/Contact/ContactComponent";

function Homepage() {
  return (
    <>
      <NavBar />
      <div>
        <div className="row1">
          <div className="row1col1">
            <BioContainer
              bioJob="Web Development - Full Stack"
              bioName="Fábio Silva."
              bioDescription="I'm focused on fulfilling objectives, 
                new challenges and being creative."
            />
          </div>
          <div className="col2">
            <Links />
            <div className="sub-row1">
              <div className="row1col2">
                <SimpleContainer
                  img={aboutMeImage}
                  subtitle="More about me"
                  title="Credentials"
                />
                <div className="row1col3">
                  <SimpleContainer
                    img={projectsImage}
                    subtitle="Github"
                    title="Web Developtment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="row2col1">
            <SimpleContainer
              img={blogImage}
              subtitle="Portfolio"
              title="Design"
            />
          </div>
          <div className="row2col2">
            <ServicesComponent subtitle="Specialization" title="Services" />
          </div>
          <div className="row2col3">
            <SocialContainer subtitle="Stay with me" title="Profiles" />
          </div>
        </div>
        <div className="row3">
          <div className="row3col1">
            <DataComponent />
          </div>
          <div className="row3col2">
            <ContactComponent />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
