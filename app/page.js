import AboutUs from "./components/AboutUs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeaderHero from "./components/HeaderHero";
import Navbar from "./components/Navbar";
import Services from "./components/Service";
import Teams from "./teams/page";

const Home = () => {
  return (
    <div id="home">
      <HeaderHero />
      <Services />
      <Teams />
      <AboutUs />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
