import React, { useState } from 'react';
import { AlertCircle, Zap, Shield, ChevronRight } from 'lucide-react';

const Violentometer = () => {
  const [level, setLevel] = useState(1); // 1-indexed

  const levels = [
    // GREEN - PROFITE
    { text: "On te traite avec bienveillance", color: "#6ab04c", zone: "green" },
    { text: "On respecte tes idées et tes décisions", color: "#6ab04c", zone: "green" },
    { text: "On t'offre une ambiance d'écoute et de partage respectueuse", color: "#6ab04c", zone: "green" },
    { text: "On croit dans ta capacité à faire carrière", color: "#6ab04c", zone: "green" },
    { text: "On te fait des retours sur ton travail qui te permettent de l'améliorer", color: "#6ab04c", zone: "green" },
    { text: "On te permet de développer tes compétences et ta confiance en toi", color: "#6ab04c", zone: "green" },
    { text: "On te soutient dans tes perspectives de carrière", color: "#6ab04c", zone: "green" },
    { text: "On te permet d’avoir un bon équilibre entre vie professionnelle et vie privée", color: "#6ab04c", zone: "green" },

    // ORANGE - VIGILANCE
    { text: "On affirme que le milieu est exempt de sexisme", color: "#f39c12", zone: "orange" },
    { text: "On suggère que ta vie privée t'empêcherait de faire carrière", color: "#f39c12", zone: "orange" },
    { text: "On te cantonne à des tâches supposées féminines", color: "#f39c12", zone: "orange" },
    { text: "On sous-estime tes compétences", color: "#e67e22", zone: "orange" },
    { text: "On te traite de manière condescendante", color: "#e67e22", zone: "orange" },
    { text: "On invisibilise tes idées", color: "#e67e22", zone: "orange" },
    { text: "On ne t'implique pas dans des projets stratégiques", color: "#d35400", zone: "orange" },
    { text: "On rabaisse tes compétences en public", color: "#d35400", zone: "orange" },
    { text: "On banalise les comportements harcelants", color: "#d35400", zone: "orange" },
    { text: "On te ramène souvent à ton physique", color: "#c0392b", zone: "orange" },
    { text: "On te fait occasionnellement des remarques ouvertement sexistes", color: "#c0392b", zone: "orange" },
    { text: "On t'interpelle avec des termes peu adaptés aux relations professionnelles", color: "#c0392b", zone: "orange" },
    { text: "On t'isole de tes collègues", color: "#c0392b", zone: "orange" },
    { text: "On te pose des questions sur ta vie intime", color: "#c0392b", zone: "orange" },
    { text: "On diffuse des rumeurs sexuelles à ton sujet", color: "#c0392b", zone: "orange" },

    // RED - DANGER
    { text: "On raconte des plaisanteries sexistes à longueur de journée", color: "#e74c3c", zone: "red" },
    { text: "On te raconte des histoires à caractère sexuel qui te mettent mal à l'aise", color: "#e74c3c", zone: "red" },
    { text: "On te fait des commentaires insultants ou blessants à connotation sexuelle", color: "#c0392b", zone: "red" },
    { text: "On t'expose à du matériel à connotation sexuelle", color: "#c0392b", zone: "red" },
    { text: "On te menace de représailles si tu dénonces des comportements violents", color: "#c0392b", zone: "red" },
    { text: "On te fait des avances intimes malgré ton refus", color: "#962f2f", zone: "red" },
    { text: "On te propose des avantages professionnels en échange de relations intimes", color: "#962f2f", zone: "red" },
    { text: "On te fait subir des répercussions négatives pour avoir refusé des avances", color: "#962f2f", zone: "red" },
    { text: "On s'arrange pour avoir des contacts physiques répétés avec toi qui te mettent mal à l'aise", color: "#962f2f", zone: "red" }
  ];

  const current = levels[level - 1];

  const getFeedback = (zone) => {
    switch (zone) {
      case 'green': return { title: "PROFITE", msg: "Ton environnement est sain.", color: "#6ab04c", icon: Shield };
      case 'orange': return { title: "VIGILANCE", msg: "Ce n'est pas normal, parles-en.", color: "#e67e22", icon: AlertCircle };
      case 'red': return { title: "DANGER", msg: "Protège-toi, demande de l'aide.", color: "#c0392b", icon: Zap };
      default: return null;
    }
  };

  const feedback = getFeedback(current.zone);
  const Icon = feedback.icon;

  return (
    <section id="violentometer" className="vio-section">
      <div className="container center-container">
        <h2>Le Violentomètre</h2>
        <p className="intro">Déplace le curseur pour évaluer ta situation.</p>

        <div className="gauge-slider-wrapper">
          <div className="slider-track">
            <div className="track-bg"></div>
            <input
              type="range"
              min="1"
              max={levels.length}
              value={level}
              onChange={(e) => setLevel(parseInt(e.target.value))}
              className="slider"
              aria-label="Niveau de violence"
            />
          </div>

          <div className="labels">
            <span>Sain</span>
            <span>Vigilance</span>
            <span>Danger</span>
          </div>

          <div className="dynamic-content">
            <div className="level-number" style={{ color: current.color }}>{level}</div>
            <div className="level-text">"{current.text}"</div>
          </div>

          <div className={`feedback-box zone-${current.zone}`}>
            <div className="feedback-header">
              <Icon size={24} />
              <h3>{feedback.title}</h3>
            </div>
            <p>{feedback.msg}</p>
            {current.zone === 'red' && <a href="/urgence" className="btn btn-sm btn-danger-invert">SOS Urgence</a>}
          </div>
        </div>
      </div>

      <style>{`
                .vio-section { padding: 4rem 0; background: #fff; }
                .center-container { text-align: center; max-width: 800px; margin: 0 auto; }
                .intro { color: #636e72; margin-bottom: 3rem; }

                .gauge-slider-wrapper {
                    position: relative;
                    padding: 0 1rem;
                }

                .track-bg {
                    height: 12px;
                    width: 100%;
                    border-radius: 6px;
                    background: linear-gradient(to right, #6ab04c 0%,  #6ab04c 25%, #f39c12 25%, #f39c12 70%, #c0392b 70%, #c0392b 100%);
                    margin-bottom: 2rem;
                }

                .slider {
                    -webkit-appearance: none;
                    width: 100%;
                    height: 12px;
                    background: transparent;
                    position: absolute;
                    top: 0;
                    left: 0;
                    margin: 0;
                    padding: 0 1rem; /* align with track padding */
                    cursor: pointer;
                }

                .slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    background: #fff;
                    border: 4px solid #2d3436;
                    cursor: grab;
                    margin-top: -9px; /* center thumb on track */
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    transition: transform 0.1s;
                }
                .slider::-webkit-slider-thumb:active {
                    transform: scale(1.1);
                    cursor: grabbing;
                }
                 /* Firefox thumb */
                .slider::-moz-range-thumb {
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    background: #fff;
                    border: 4px solid #2d3436;
                    cursor: grab;
                }

                .labels {
                    display: flex;
                    justify-content: space-between;
                    margin-top: -1.5rem; /* pull up closer to slider */
                    margin-bottom: 3rem;
                    font-weight: bold;
                    font-size: 0.9rem;
                    color: #b2bec3;
                }

                .dynamic-content {
                    min-height: 120px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 2rem;
                    transition: all 0.3s;
                }
                .level-number {
                    font-size: 3rem;
                    font-weight: 800;
                    opacity: 0.2;
                    margin-bottom: 0.5rem;
                }
                .level-text {
                    font-size: 1.5rem;
                    font-weight: 500;
                    color: #2d3436;
                    line-height: 1.4;
                    max-width: 600px;
                    font-style: italic;
                }

                .feedback-box {
                    padding: 1.5rem;
                    border-radius: 12px;
                    display: inline-block;
                    min-width: 300px;
                    animation: fadeIn 0.3s ease;
                }
                .zone-green { background: #eafaf1; color: #2ecc71; }
                .zone-orange { background: #fef5e6; color: #e67e22; }
                .zone-red { background: #fadbd8; color: #e74c3c; }
                
                .feedback-header { display: flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 0.5rem; }
                .feedback-box h3 { margin: 0; font-size: 1.25rem; }
                
                .btn-danger-invert {
                    background: white;
                    color: #c0392b;
                    margin-top: 1rem;
                    border: 1px solid #c0392b;
                }
                .btn-danger-invert:hover {
                    background: #c0392b;
                    color: white;
                }

                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
    </section>
  );
};

export default Violentometer;
