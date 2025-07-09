import React from "react";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import Testimonial from "../components/TestimonialSection/TestimonialSection";
import InfoSection from "../components/InfoSection/InfoSection";
import ConnectSection from "../components/Connect/Connect";
import CtaSection from "../components/CtaSection/CtaSection";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => (
  <>
    <Hero />
    <Slider />
    <Testimonial />
    <InfoSection />


    <h2>
      <Link to="/cards" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
        Cards
      </Link>
    </h2>

    <ConnectSection />
    <CtaSection />
  </>
);

export default HomePage;
