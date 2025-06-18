import React from "react";
import HeroSection from "../components/Hero/Hero";
import SliderSection from "../components/Slider/Slider";
import QuoteSection from "../components/TestimonialSection/TestimonialSection";
import InfoSection from "../components/InfoSection/InfoSection";
import CardList from "../components/CardList/CardList";
import ConnectSection from "../components/Connect/Connect";
import CtaSection from "../components/CtaSection/CtaSection";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => (
  <>
    <Hero/>
    <Slider/>
    <Quote/>
    <InfoSection/>
    
    <h2>
      <Link to="/cards" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
        Карточки
      </Link>
    </h2>

    <Connect/>
    <CtaSection/>
  </>
);

export default HomePage;