import React from "react";
import HeroSection from "../components/Hero/Hero";
import SliderSection from "../components/Slider/Slider";
import QuoteSection from "../components/Quote/Quote";
import InfoSection from "../components/InfoSection/InfoSection";
import CardList from "../components/CardList/CardList";
import ConnectSection from "../components/Connect/Connect";
import CtaSection from "../components/CtaSection/CtaSection";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => (
  <>
    <HeroSection />
    <SliderSection />
    <QuoteSection />
    <InfoSection />


    <h2>
      <Link to="/cards" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
        Карточки
      </Link>
    </h2>

    <ConnectSection />
    <CtaSection />
  </>
);

export default HomePage;