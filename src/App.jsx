import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Comprendre from './pages/Comprendre';
import SoutienPsy from './pages/SoutienPsy';
import Urgence from './pages/Urgence';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/comprendre" element={<Comprendre />} />
            <Route path="/soutien-psy" element={<SoutienPsy />} />
            <Route path="/urgence" element={<Urgence />} />
          </Routes>
        </main>
        <Footer />
      </div>

      <style>{`
                .app-layout {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                .main-content {
                    flex: 1;
                }
                
                /* Global Animations */
                .page-fade-in {
                    animation: fadeInPage 0.4s ease-out;
                }
                @keyframes fadeInPage {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
    </Router>
  );
}

export default App;
