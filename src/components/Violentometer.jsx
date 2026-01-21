import React, { useState } from 'react';
import { AlertCircle, Zap, Shield, ChevronRight } from 'lucide-react';

const Violentometer = ({ levels, title }) => {
  const [level, setLevel] = useState(1); // 1-indexed

  // Fallback if no specific levels are provided
  const defaultLevels = [
    { text: "Niveau 1", color: "#6ab04c", zone: "green" },
    { text: "Niveau 5", color: "#f39c12", zone: "orange" },
    { text: "Niveau 10", color: "#c0392b", zone: "red" }
  ];

  const activeLevels = levels && levels.length > 0 ? levels : defaultLevels;
  const current = activeLevels[level - 1];

  const getFeedback = (zone) => {
    switch (zone) {
      case 'green': return { title: "PROFITE", msg: "Tout va bien, la relation est saine.", color: "#6ab04c", icon: Shield };
      case 'orange': return { title: "VIGILANCE", msg: "Dis Stop ! Ce n'est pas acceptable.", color: "#e67e22", icon: AlertCircle };
      case 'red': return { title: "DANGER", msg: "Protège-toi, demande de l'aide immédiatement.", color: "#c0392b", icon: Zap };
      default: return null;
    }
  };

  const feedback = getFeedback(current.zone);
  const Icon = feedback.icon;

  // Reset level if data changes and out of bounds
  if (!current) {
    setLevel(1);
    return null;
  }

  return (
    <section className="vio-instance">
      {title && <h3 className="vio-title">{title}</h3>}

      <div className="gauge-slider-wrapper">
        <div className="slider-track">
          <div className="track-bg"></div>
          <input
            type="range"
            min="1"
            max={activeLevels.length}
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

      <style>{`
                .vio-instance { background: #fff; padding: 1rem 0 3rem; border-bottom: 1px solid #f0f0f0; margin-bottom: 3rem; }
                .vio-instance:last-child { border-bottom: none; }
                
                .vio-title {
                    text-align: center;
                    font-size: 1.5rem;
                    color: #2c3e50;
                    margin-bottom: 2rem;
                }

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
                    text-align: center;
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
