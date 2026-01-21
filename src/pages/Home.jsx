import React from 'react';
import { Shield, Lock, Users, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-page fade-in">
            <section className="hero-section">
                <div className="container">
                    <h1>Tu n’es pas seul(e). <br />De l’aide existe.</h1>
                    <p className="hero-subtitle">
                        Un espace bienveillant pour comprendre, s'informer et trouver du soutien.
                    </p>
                    <div className="awareness-box">
                        <p>
                            "Ce que vous vivez n'est pas une honte. Il est vital d'en parler et de ne pas rester seul(e).
                            N'hésitez jamais. Personne n'a le droit de minimiser votre souffrance, de la banaliser ou de prétendre que c'est de la 'victimisation'."
                        </p>
                    </div>
                    <div className="hero-actions">
                        <Link to="/comprendre" className="btn btn-primary">
                            Comprendre ce que je vis <ArrowRight size={18} />
                        </Link>
                        <Link to="/soutien-psy" className="btn btn-secondary">
                            Trouver du soutien
                        </Link>
                    </div>
                </div>
            </section>

            <section className="info-section">
                <div className="container">
                    <div className="info-grid">
                        <div className="info-card">
                            <Shield className="icon-main" size={40} />
                            <h3>Informatif & Non Lucratif</h3>
                            <p>Ce site est une initiative citoyenne à but purement informatif.
                                <strong> Ce n'est PAS un site gouvernemental.</strong></p>
                        </div>
                        <div className="info-card">
                            <Lock className="icon-main" size={40} />
                            <h3>100% Anonyme</h3>
                            <p>Ta navigation est sûre. Aucune donnée personnelle n'est enregistrée,
                                aucun traceur publicitaire n'est utilisé.</p>
                        </div>
                        <div className="info-card">
                            <Users className="icon-main" size={40} />
                            <h3>Pour Tous & Toutes</h3>
                            <p>Les violences (sexuelles, racistes, conjugales, harcèlement) peuvent toucher tout le monde,
                                femmes comme hommes.</p>
                        </div>
                        <div className="info-card">
                            <Heart className="icon-main" size={40} />
                            <h3>Tes ressentis sont valides</h3>
                            <p>Chaque individu réagit différemment. Personne n'a le droit de minimiser ce que tu ressens.</p>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
                .home-page { padding-bottom: 4rem; }
                .hero-section {
                    background-image: url('/hero-bg.png');
                    background-size: cover;
                    background-position: center;
                    padding: 6rem 0;
                    text-align: center;
                    margin-bottom: 0;
                    position: relative;
                }
                /* Overlay for contrast */
                .hero-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.6);
                    backdrop-filter: blur(8px);
                    z-index: 0;
                }
                .hero-section .container {
                    position: relative;
                    z-index: 1;
                }
                
                h1 {
                    color: #2c3e50;
                    text-shadow: 0 2px 4px rgba(255,255,255,0.8);
                }

                .hero-subtitle {
                    font-size: 1.3rem;
                    color: #2d3436;
                    max-width: 600px;
                    margin: 1.5rem auto 2.5rem;
                    font-weight: 500;
                }
                
                .awareness-box {
                    background: rgba(255, 255, 255, 0.7);
                    border-left: 4px solid var(--color-primary);
                    padding: 1.5rem;
                    max-width: 700px;
                    margin: 0 auto 3rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                }
                .awareness-box p {
                    font-style: italic;
                    color: #2d3436;
                    font-size: 1.05rem;
                    line-height: 1.6;
                    margin: 0;
                }

                .hero-actions {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .info-section {
                    padding: 4rem 0;
                    background: #fff;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                .info-card {
                    padding: 2rem;
                    background: #f8f9fa;
                    border-radius: 12px;
                    text-align: left;
                    transition: transform 0.2s;
                }
                .info-card:hover { 
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                }
                .icon-main {
                    color: var(--color-primary);
                    margin-bottom: 1rem;
                }
                .info-card h3 {
                    margin-bottom: 1rem;
                    color: #2c3e50;
                    font-size: 1.2rem;
                }
                .info-card p {
                    color: #636e72;
                    line-height: 1.6;
                    font-size: 0.95rem;
                }
                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.8rem 1.5rem;
                    border-radius: 30px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.2s;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }
                .btn-primary {
                    background: var(--color-primary);
                    color: white;
                }
                .btn-primary:hover {
                    background: #27ae60;
                    transform: translateY(-2px);
                }
                .btn-secondary {
                    background: white;
                    color: var(--color-primary);
                    border: 2px solid var(--color-primary);
                }
                .btn-secondary:hover {
                    background: #eafaf1;
                    transform: translateY(-2px);
                }
            `}</style>
        </div>
    );
};

export default Home;
