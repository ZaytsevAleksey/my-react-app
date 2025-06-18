import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Preloader from "./components/Preloader/Preloader.tsx";
import SignupModal from "./components/Register/Register";
import LoginModal from "./components/Login/Login";

import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardPage";
import NotFoundPage from "./pages/NotFoundPage";

const App: React.FC = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading && <Preloader />}
      <Register open={showRegister} onClose={() => setShowRegister(false)} />
      <Login open={showLogin} onClose={() => setShowLogin(false)} />

      <Routes>
        <Route
          path="/"
          element={<Layout onSignup={() => setShowSignup(true)} onLogin={() => setShowLogin(true)} />}
        >
          <Route index element={<HomePage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
