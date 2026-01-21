import React from 'react';
import { Phone, ExternalLink, ShieldAlert } from 'lucide-react';

const Urgence = () => {
    const numbers = [
        {
            id: '3018',
            num: '3018',
            title: 'Cyberharcèlement',
            desc: 'Écoute, conseils et intervention pour les victimes de violences numériques.',
            color: '#e67e22',
            hours: 'Gratuit, anonyme, 9h-23h (7j/7)'
        },
        {
            id: '3919',
            num: '3919',
            title: 'Violences Femmes Info',
            desc: 'Écoute et orientation pour les femmes victimes de violences conjugales, sexuelles, etc.',
            color: '#9b59b6',
            hours: 'Gratuit, anonyme, 24h/24, 7j/7'
        },
        {
            id: '3114',
            num: '3114',
            title: 'Prévention Suicide',
            desc: 'Écoute professionnelle et confidentielle pour les personnes en détresse.',
            color: '#c0392b',
            hours: 'Gratuit, 24h/24, 7j/7'
        },
        {
            id: '119',
            num: '119',
            title: 'Enfance en Danger',
            desc: 'Pour tout enfant ou adolescent en danger ou en risque de l\'être.',
            color: '#27ae60',
            hours: 'Gratuit, 24h/24, 7j/7'
        },
        {
            id: '18',
            num: '18',
            title: 'Pompiers',
            desc: 'Secours d\'urgence aux personnes en danger immédiat (accident, malaise...).',
            color: '#e74c3c',
            hours: 'Gratuit, 24h/24'
        }
    ];

    return (
        <div className="page-container page-fade-in">
            <Helmet>
                <title>Numéros d'Urgence | Écoute Moi - Aide Immédiate</title>
                <meta name="description" content="Danger immédiat ? Appelez le 17, 112 ou 15. Victime de violences ? 3919, 3018, 119. Liste complète des numéros d'urgence gratuits." />
            </Helmet>
            <section className="section-header emergency-header">
                <div className="container">
                    <h1>Numéros d'Urgence</h1>
                    <p className="subtitle">En cas de danger immédiat, n'hésite jamais à appeler.</p>
                </div>
            </section>

            <div className="container">
                <div className="numbers-grid">
                    {numbers.map((item) => (
                        <div key={item.id} className="emergency-card" style={{ borderTopColor: item.color }}>
                            <div className="card-top">
                                <h3>{item.title}</h3>
                                <Phone className="icon-phone" size={24} style={{ color: item.color }} />
                            </div>
                            <div className="number-big" style={{ color: item.color }}>{item.num}</div>
                            <p className="desc">{item.desc}</p>
                            <p className="hours">{item.hours}</p>
                            <a href={`tel:${item.num}`} className="btn-call" style={{ backgroundColor: item.color }}>
                                Appeler maintenant
                            </a>
                        </div>
                    ))}

                    {/* PHAROS CARD */}
                    <div className="emergency-card pharos-card">
                        <div className="card-top">
                            <h3>Signalement en ligne</h3>
                            <ShieldAlert className="icon-phone" size={24} style={{ color: '#2c3e50' }} />
                        </div>
                        <div className="number-big pharos-title">PHAROS</div>
                        <p className="desc">Portail officiel pour signaler des contenus illicites sur Internet (cyberharcèlement, menaces, discriminations).</p>
                        <p className="hours">Service officiel du gouvernement</p>
                        <a href="https://internet-signalement.gouv.fr/" target="_blank" rel="noopener noreferrer" className="btn-call btn-pharos">
                            Signaler sur PHAROS <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .page-container { padding-bottom: 4rem; }
                .urgent-header {
                    background: #ffeaa7;
                    padding: 4rem 0 3rem;
                    text-align: center;
                    margin-bottom: 3rem;
                }
                .urgent-header h1 { color: #d35400; }
                .urgent-header .subtitle { color: #d35400; opacity: 0.9; }

                .numbers-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                }
                .emergency-card {
                    background: white;
                    padding: 2rem;
                    border-radius: 12px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
                    border-top: 6px solid #ccc;
                    text-align: center;
                    transition: transform 0.2s;
                    display: flex;
                    flex-direction: column;
                }
                .emergency-card:hover { transform: translateY(-5px); }
                
                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }
                .card-top h3 { font-size: 1.1rem; color: #2d3436; margin: 0; }
                
                .number-big {
                    font-size: 3rem;
                    font-weight: 800;
                    margin-bottom: 0.5rem;
                }
                .desc { color: #636e72; margin-bottom: 0.5rem; line-height: 1.5; font-size: 0.95rem; flex: 1; }
                .hours { font-size: 0.85rem; color: #95a5a6; margin-bottom: 1.5rem; font-style: italic; }
                
                .btn-call {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                    width: 100%;
                    padding: 0.8rem;
                    color: white;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: 600;
                    transition: opacity 0.2s;
                }
                .btn-call:hover { opacity: 0.9; }

                /* PHAROS Spec */
                .pharos-card { border-top-color: #2c3e50; background: #fdfdfd; }
                .pharos-title { font-size: 2.5rem; color: #2c3e50; }
                .btn-pharos { background: #2c3e50; }
            `}</style>
        </div>
    );
};

export default Urgence;
