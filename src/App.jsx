import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import Header from './components/Header';
import Footer from './components/Footer';

// Lazy Load Pages for Performance
const Home = lazy(() => import('./pages/Home'));
const Comprendre = lazy(() => import('./pages/Comprendre'));
const SoutienPsy = lazy(() => import('./pages/SoutienPsy'));
const Urgence = lazy(() => import('./pages/Urgence'));

// Loading Fallback Component
const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
    <style>{`
            .loader {
                width: 48px;
                height: 48px;
                border: 5px solid #bdc3c7;
                border-bottom-color: #6c5ce7;
                border-radius: 50%;
                display: inline-block;
                box-sizing: border-box;
                animation: rotation 1s linear infinite;
            }
            @keyframes rotation {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}</style>
    <span className="loader"></span>
  </div>
);

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
    <HelmetProvider>
      <Router basename="/ecoutemoi.fr">
        <ScrollToTop />
        <div className="app-layout">
          <Header />
          <main className="main-content">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Navigate to="/accueil" replace />} />
                <Route path="/accueil" element={<Home />} />
                <Route path="/comprendre" element={<Comprendre />} />
                <Route path="/soutien-psy" element={<SoutienPsy />} />
                <Route path="/urgence" element={<Urgence />} />
              </Routes>
            </Suspense>
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
    </HelmetProvider>
  );
}

export default App;
