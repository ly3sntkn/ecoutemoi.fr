import React from 'react';

const Understanding = () => {
    const types = [
        {
            title: "Harcèlement Scolaire",
            desc: "Humiliations, rumeurs, bousculades ou rejet à l'école.",
            icon: "🏫"
        },
        {
            title: "Cyber-harcèlement",
            desc: "Messages d'insultes, diffusion de photos ou menaces sur les réseaux.",
            icon: "📱"
        },
        {
            title: "Violences Sexistes",
            desc: "Remarques, gestes déplacés ou non-consentement.",
            icon: "🙅‍♀️"
        },
        {
            title: "Isolement",
            desc: "Se sentir seul(e), exclu(e) ou ignoré(e) par le groupe.",
            icon: "🤐"
        }
    ];

    return (
        <section id="understanding" className="und-section">
            <div className="container">
                <h2>Comprendre pour Agir</h2>
                <p className="subtitle">Savoir identifier les situations anormales est le premier pas.</p>

                <div className="types-grid">
                    {types.map((type, index) => (
                        <div key={index} className="type-card">
                            <div className="type-icon">{type.icon}</div>
                            <h3>{type.title}</h3>
                            <p>{type.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .und-section {
          padding: 4rem 0;
          background: #fff;
        }
        .und-section h2 {
          text-align: center;
          color: var(--color-primary);
        }
        .subtitle {
          text-align: center;
          color: var(--color-text-light);
          margin-bottom: 3rem;
        }
        .types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }
        .type-card {
          padding: 1.5rem;
          background: #f1f2f6;
          border-radius: var(--border-radius);
          text-align: center;
          transition: background 0.2s;
        }
        .type-card:hover {
          background: #dfe6e9;
        }
        .type-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .type-card h3 {
          margin-bottom: 0.5rem;
          color: var(--color-text);
        }
        .type-card p {
          color: var(--color-text-light);
          font-size: 0.95rem;
        }
      `}</style>
        </section>
    );
};

export default Understanding;
