```javascript
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HeartHandshake, Phone, ExternalLink, Info } from 'lucide-react';

const SoutienPsy = () => {
    return (
        <div className="page-container page-fade-in">
             <Helmet>
                <title>Soutien Psychologique | Écoute Moi - Aide Gratuite</title>
                <meta name="description" content="Besoin de parler ? Trouvez des professionnels de santé et des dispositifs d'écoute (Mon Soutien Psy, 3114, Fil Santé Jeunes)." />
            </Helmet>
            <section className="section-header">
                <div className="container">
                    <h1>Soutien Psychologique</h1>
                    <p className="subtitle">Parler à un professionnel peut tout changer.</p>
                </div>
            </section>

            <div className="container content-wrapper">
                {/* Intro / Validation */}
                <div className="card intro-card">
                    <HeartHandshake className="icon-large" size={48} />
                    <h2>Pourquoi consulter ?</h2>
                    <p>
                        Il n’y a pas de "petite" souffrance. Si tu te sens mal, angoissé(e), ou que tu as vécu des choses difficiles,
                        un psychologue est là pour t'écouter <strong>sans jugement</strong> et en toute confidentialité.
                        C'est une démarche courageuse qui aide à se reconstruire.
                    </p>
                </div>

                {/* Mon Soutien Psy */}
                <div className="card action-card">
                    <h2>Trouver un psychologue</h2>
                    <p>
                        Le dispositif <strong>Mon Soutien Psy</strong> permet de bénéficier de séances remboursées par l'Assurance Maladie.
                    </p>

                    <a href="https://monsoutienpsy.ameli.fr/recherche-psychologue"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-lg"
                    >
                        Trouver un psy près de chez moi <ExternalLink size={18} />
                    </a>

                    <div className="info-link-wrapper">
                        <a href="https://www.info.gouv.fr/actualite/mon-soutien-psy-12-seances-remboursees-par-an"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-link"
                        >
                            En savoir plus sur le remboursement (Mon Soutien Psy) <ArrowUpRight size={14} />
                        </a>
                    </div>
                </div>

                {/* Suicide Prevention */}
                <div className="card emergency-suicide">
                    <div className="emergency-header">
                        <Phone size={32} strokeWidth={2.5} />
                        <h2>Urgence & Détresse</h2>
                    </div>
                    <p>Si tu as des idées noires ou suicidaires, appelle tout de suite le <strong>3114</strong>.</p>
                    <div className="number-display">3114</div>
                    <p className="sub-text">Numéro national de prévention du suicide (Gratuit, 24h/24, 7j/7)</p>
                </div>
            </div>

            <style>{`
    .page - container { padding - bottom: 4rem; }
                .section - header {
    background: #eafaf1; /* Soft green tint */
    padding: 4rem 0 3rem;
    text - align: center;
    margin - bottom: 2rem;
}
                .subtitle { color: #2d3436; font - size: 1.1rem; }
                .content - wrapper {
    display: grid;
    gap: 2rem;
    max - width: 800px;
    margin: 0 auto;
}
                .card {
    background: white;
    padding: 2.5rem;
    border - radius: 16px;
    box - shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
    border: 1px solid #f1f2f6;
    text - align: center;
}
                .intro - card {
    background: #fff;
    border - left: 5px solid var(--color - primary);
}
                .icon - large { color: var(--color - primary); margin - bottom: 1rem; }
                
                .action - card {
    background: #f8f9fa;
}
                .btn - lg {
    display: inline - flex;
    align - items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    font - size: 1.1rem;
    margin: 1.5rem 0;
}
                .text - link {
    color: #546e7a;
    text - decoration: underline;
    font - size: 0.9rem;
    display: inline - flex;
    align - items: center;
    gap: 4px;
}
                .text - link:hover { color: var(--color - primary); }

                .emergency - suicide {
    background: #fff0f0; /* Very light red */
    border: 2px solid #fab1a0;
    color: #c0392b;
}
                .emergency - header {
    display: flex;
    align - items: center;
    justify - content: center;
    gap: 1rem;
    margin - bottom: 1rem;
}
                .number - display {
    font - size: 3.5rem;
    font - weight: 800;
    margin: 0.5rem 0;
    color: #d63031;
}
                .sub - text { font - size: 0.9rem; opacity: 0.9; }

                h2 { margin - bottom: 1rem; color: #2d3436; font - size: 1.5rem; }
                p { line - height: 1.6; color: #636e72; }
                .emergency - suicide p { color: #c0392b; }
`}</style>
        </div>
    );
};

export default SoutienPsy;
