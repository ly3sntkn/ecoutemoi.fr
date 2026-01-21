import React from 'react';
import { AlertTriangle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <h4>À propos</h4>
            <div className="info-block">
              <AlertTriangle size={18} className="icon-warning" />
              <p>Ce site est informatif et ne remplace pas un service d’urgence ou un suivi médical.</p>
            </div>
          </div>

          <div className="footer-col">
            <h4>En cas d'urgence</h4>
            <p>Consultez notre page <Link to="/urgence" style={{ color: '#fdcb6e', textDecoration: 'underline' }}>Urgences</Link> pour tous les numéros d'aide.</p>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><Link to="#">Mentions Légales</Link></li>
              <li><a href="mailto:contact@ecoutemoi.fr" className="contact-link"><Mail size={14} /> Nous contacter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Prévention Harcèlement. Initiative citoyenne.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #2d3436;
          color: white;
          padding: 3rem 0 1rem;
          margin-top: auto;
        }
        .footer-top {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .footer-col {
          flex: 1;
          min-width: 200px;
        }
        .footer-col h4 {
          margin-bottom: 1rem;
          color: #dfe6e9;
          font-size: 1.1rem;
        }
        .footer-col ul { list-style: none; padding: 0; }
        .footer-col ul li { margin-bottom: 0.8rem; }
        
        .footer-col a { color: #b2bec3; text-decoration: none; transition: color 0.2s; }
        .footer-col a:hover { color: white; }

        .info-block {
            display: flex;
            gap: 10px;
            background: rgba(255,255,255,0.05);
            padding: 1rem;
            border-radius: 8px;
            font-size: 0.9rem;
            line-height: 1.5;
            align-items: flex-start;
        }
        .icon-warning { color: #fdcb6e; flex-shrink: 0; margin-top: 2px; }
        
        .contact-link { display: flex; align-items: center; gap: 8px; }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          font-size: 0.85rem;
          color: #636e72;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
