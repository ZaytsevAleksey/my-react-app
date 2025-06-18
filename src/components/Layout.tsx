import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Preloader from './Preloader/Preloader';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children?: React.ReactNode;
  showPreloader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showPreloader = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="layout">
      {showPreloader && <Preloader />}
      
      <Header />
      
      <main className="main-content">
        {isHomePage && !children ? (
          <>
            <HeroSection />
            <Slider />
            <InfoSection>
              <CardComponent />
            </InfoSection>
            <ConnectSection />
            <Quote />
            <CtaSection />
          </>
        ) : (
          children
        )}
      </main>
      
      <Footer />
    </div>
  );
};