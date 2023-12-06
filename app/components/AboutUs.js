import Image from "next/image";
import SectionTitle from "./SectionTitle";
import SectionSubtitle from "./SectionSubtitle";
import AboutItem from "./AboutItem";

export default function AboutUs() {
  return (
    <section className="py-32" id="about">
      <div className="container mx-auto">
        <SectionTitle>ABOUT US</SectionTitle>
        <SectionSubtitle>Purpose, Vision & Core Value</SectionSubtitle>
        <div className="flex -mx-4 mt-20 flex-wrap lg:px-4 lg:-mx-0">
          <div className="md:w-6/12 w-full mb-20 px-14 md:px-0 object-cover">
            <AboutItem
              name="Xl Axiata Global Glance"
              image="/aboutUs1.png"
              description="About XL Axiata"
            />
          </div>
          <div className="md:w-6/12 w-full mb-20 px-14 md:px-0">
            <AboutItem
              name="Purpose"
              image="/aboutUs2.png"
              description="We bring the world closer in a simple way for a brighter life."
            />
          </div>
          <div className="md:w-6/12 w-full mb-20 px-14 md:px-0">
            <AboutItem
              name="Our Vision"
              image="/aboutUs3.png"
              description="We Bring the World Closer in a Simple Way For a Brighter Life."
            />
          </div>
          <div className="md:w-6/12 w-full mb-20 px-14 md:px-0">
            <AboutItem
              name="Exceptional
              Performance"
              image="/aboutUs4.png"
              description="I persevere in challenging situation and learn from stepbacks"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
