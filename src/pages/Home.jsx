import React from 'react';
import { Shield, Lock, Users, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className="home-page fade-in">
            <Helmet>
                <title>Accueil | Écoute Moi - Soutien contre les violences</title>
                <meta name="description" content="Écoute Moi : Espace bienveillant pour comprendre, s'interroger et trouver du soutien face aux violences conjugales, scolaires et intrafamiliales. 100% anonyme." />
                <meta name="keywords" content="violence conjugale, harcèlement scolaire, aide, soutien, anonyme, écoute, violentomètre, 3919, 3018" />
                <meta property="og:title" content="Écoute Moi - De l'aide existe" />
                <meta property="og:description" content="Un espace pour comprendre ce que tu vis et trouver de l'aide. Anonyme et gratuit." />
                <meta property="og:type" content="website" />
            </Helmet>
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
                    /* Updated Banner Image */
                    background-image: url('/hero-banner.png');
                    background-size: cover;
                    background-position: center;
                    padding: 8rem 0; /* More padding for bigger hero */
                    text-align: center;
                    margin-bottom: 0;
                    position: relative;
                    color: #2c3e50;
                }
                /* Stronger Blur Overlay */
                .hero-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(255, 255, 255, 0.4); /* Less opaque to see image */
                    backdrop-filter: blur(12px); /* Strong blur */
                    -webkit-backdrop-filter: blur(12px);
                    z-index: 0;
                }
                .hero-section .container {
                    position: relative;
                    z-index: 1;
                }
                
                h1 {
                    color: #2c3e50;
                    font-size: 3rem;
                    text-shadow: 0 4px 20px rgba(255,255,255,0.8);
                    margin-bottom: 1.5rem;
                }

                .hero-subtitle {
                    font-size: 1.5rem;
                    color: #34495e;
                    max-width: 700px;
                    margin: 0 auto 3rem;
                    font-weight: 500;
                    text-shadow: 0 1px 2px rgba(255,255,255,0.8);
                }
                
                .awareness-box {
                    background: rgba(255, 255, 255, 0.85); /* More opaque */
                    border-left: 5px solid var(--color-primary);
                    padding: 2rem;
                    max-width: 800px;
                    margin: 0 auto 3.5rem;
                    border-radius: 12px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
                    backdrop-filter: blur(5px);
                }
                .awareness-box p {
                    font-style: italic;
                    color: #2c3e50;
                    font-size: 1.15rem;
                    line-height: 1.6;
                    margin: 0;
                    font-weight: 500;
                }

                .hero-actions {
                    display: flex;
                    gap: 1.5rem;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .info-section {
                    padding: 4rem 0;
                    background: #fff;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }
                .info-card {
                    padding: 2rem;
                    background: #f8f9fa;
                    border-radius: 16px;
                    text-align: left;
                    transition: transform 0.3s, box-shadow 0.3s;
                    border: 1px solid #edf2f7;
                }
                .info-card:hover { 
                    transform: translateY(-8px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.08);
                }
                .icon-main {
                    color: var(--color-primary);
                    margin-bottom: 1.2rem;
                }
                .info-card h3 {
                    margin-bottom: 1rem;
                    color: #2c3e50;
                    font-size: 1.3rem;
                }
                .info-card p {
                    color: #636e72;
                    line-height: 1.6;
                    font-size: 1rem;
                }
                .btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 1rem 2rem;
                    border-radius: 50px;
                    font-weight: 700;
                    text-decoration: none;
                    transition: all 0.3s;
                }
                .btn-primary {
                    background: var(--color-primary);
                    color: white;
                    box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
                }
                .btn-primary:hover {
                    background: #27ae60;
                    transform: translateY(-3px);
                    box-shadow: 0 8px 25px rgba(46, 204, 113, 0.5);
                }
                .btn-secondary {
                    background: rgba(255,255,255,0.9);
                    color: var(--color-primary);
                    border: 2px solid var(--color-primary);
                }
                .btn-secondary:hover {
                    background: #eafaf1;
                    transform: translateY(-3px);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                }
            `}</style>
        </div>
    );
};

export default Home;
