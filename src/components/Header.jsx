import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/accueil" className="logo" onClick={closeMenu}>
          <div className="logo-icon">
            <Heart size={20} fill="#6c5ce7" stroke="#6c5ce7" />
          </div>
          <span>Écoute Moi</span>
        </Link>

        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/accueil" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            Accueil
          </NavLink>
          <NavLink to="/comprendre" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            Comprendre
          </NavLink>
          <NavLink to="/soutien-psy" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
            Soutien Psy
          </NavLink>
          <Link to="/urgence" className="btn btn-urgent" onClick={closeMenu}>
            Urgence
          </Link>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <style>{`
                .site-header {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
                }
                .header-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 70px;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: var(--color-text);
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .logo-icon {
                    background: #e6e6fa;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .main-nav {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                .nav-link {
                    text-decoration: none;
                    color: #636e72;
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: color 0.2s;
                    position: relative;
                }
                .nav-link:hover, .nav-link.active {
                    color: var(--color-primary);
                }
                .nav-link.active::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: var(--color-primary);
                    border-radius: 2px;
                }

                .btn-urgent {
                    background: #e74c3c;
                    color: white;
                    padding: 0.5rem 1.2rem;
                    border-radius: 30px;
                    font-weight: bold;
                    font-size: 0.9rem;
                    transition: all 0.2s;
                    text-decoration: none;
                }
                .btn-urgent:hover {
                    background: #c0392b;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 8px rgba(231, 76, 60, 0.3);
                }

                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--color-text);
                }

                @media (max-width: 768px) {
                    .mobile-menu-btn { display: block; }
                    .main-nav {
                        position: absolute;
                        top: 70px;
                        left: 0;
                        width: 100%;
                        background: white;
                        flex-direction: column;
                        padding: 2rem;
                        gap: 1.5rem;
                        border-bottom: 1px solid #f1f1f1;
                        transform: translateY(-150%);
                        transition: transform 0.3s ease;
                        z-index: 999;
                    }
                    .main-nav.open {
                        transform: translateY(0);
                        box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                    }
                    .btn-urgent { width: 100%; text-align: center; }
                }
            `}</style>
    </header>
  );
};

export default Header;
