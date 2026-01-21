import React, { useState } from 'react';
import { AlertCircle, CheckCircle, RotateCcw, ArrowRight, HelpCircle } from 'lucide-react';

const Questionnaire = () => {
    const questions = [
        {
            id: 1,
            text: "Est-ce qu'on s'est déjà moqué de ton apparence physique ou de tes goûts ?",
            type: "Harcèlement scolaire"
        },
        {
            id: 2,
            text: "Est-ce qu'on t'a déjà mis(e) à l'écart volontairement d'un groupe ?",
            type: "Isolement"
        },
        {
            id: 3,
            text: "Est-ce qu'on t'a déjà bousculé(e), frappé(e) ou fait mal physiquement ?",
            type: "violence physique"
        },
        {
            id: 4,
            text: "Est-ce qu'on a déjà répandu des rumeurs sur toi (en vrai ou sur les réseaux) ?",
            type: "Rumeurs / Cyber"
        },
        {
            id: 5,
            text: "Est-ce que tu as déjà reçu des messages d'insultes ou de menaces en ligne ?",
            type: "Cyberharcèlement"
        },
        // New Questions
        {
            id: 6,
            text: "Est-ce qu'on t'a déjà insulté(e) ou rejeté(e) à cause de ta couleur de peau, tes origines ou ta religion ?",
            type: "Racisme / Discrimination"
        },
        {
            id: 7,
            text: "Est-ce qu'on s'est moqué de toi ou t'a agressé(e) à cause de qui tu aimes (homosexualité, etc.) ou de ton genre ?",
            type: "Homophobie / Transphobie"
        },
        {
            id: 8,
            text: "Est-ce que ton partenaire contrôle tes sorties, tes vêtements ou tes messages ?",
            type: "Violence Conjugale"
        }
    ];

    const [currentStep, setCurrentStep] = useState(0);
    const [detectedTypes, setDetectedTypes] = useState(new Set());
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (isYes) => {
        if (isYes) {
            setDetectedTypes(prev => new Set(prev).add(questions[currentStep].type));
        }

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setDetectedTypes(new Set());
        setShowResult(false);
    };

    const detectedList = Array.from(detectedTypes);

    return (
        <div id="questionnaire" className="quiz-container">
            <div className="quiz-card">
                {!showResult ? (
                    <>
                        <div className="progress-bar">
                            <div className="fill" style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}></div>
                        </div>

                        <div className="question-box">
                            <span className="q-num">Question {currentStep + 1}/{questions.length}</span>
                            <h3>{questions[currentStep].text}</h3>
                        </div>

                        <div className="actions">
                            <button onClick={() => handleAnswer(true)} className="btn-yes">
                                OUI
                            </button>
                            <button onClick={() => handleAnswer(false)} className="btn-no">
                                NON
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="result-box fade-in">
                        {detectedList.length > 0 ? (
                            <div className="alert-content">
                                <AlertCircle className="icon-alert" size={48} />
                                <h3>Ce n'est pas anodin</h3>

                                <div className="result-details">
                                    <p>D'après tes réponses, tu pourrais être confronté(e) à :</p>
                                    <ul className="types-list">
                                        {detectedList.map((type, idx) => (
                                            <li key={idx}>{type}</li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="alert-msg">
                                    Ces comportements ne sont pas normaux et sont souvent punis par la loi.
                                    Tu n'as pas à subir cela seul(e).
                                </p>

                                <div className="result-actions">
                                    <button onClick={resetQuiz} className="btn-reset">
                                        <RotateCcw size={16} /> Recommencer
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="safe-content">
                                <CheckCircle className="icon-safe" size={48} />
                                <h3>Tout semble aller bien</h3>
                                <p>Aucun signe particulier de violence détecté via ce questionnaire rapide.</p>
                                <p>Reste vigilant(e) pour toi et tes amis.</p>
                                <button onClick={resetQuiz} className="btn-reset">
                                    <RotateCcw size={16} /> Recommencer
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <style>{`
                .quiz-container { max-width: 700px; margin: 0 auto; }
                .quiz-card {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 16px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08); /* Increased shadow */
                    text-align: center;
                    border: 1px solid #f1f2f6;
                }
                .progress-bar {
                    height: 8px;
                    background: #dfe6e9;
                    border-radius: 4px;
                    margin-bottom: 2.5rem;
                    overflow: hidden;
                }
                .fill {
                    height: 100%;
                    background: linear-gradient(90deg, var(--color-primary) 0%, #00cec9 100%);
                    transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                }
                .q-num {
                    text-transform: uppercase;
                    font-size: 0.85rem;
                    letter-spacing: 1.5px;
                    color: #b2bec3;
                    font-weight: 700;
                    display: block;
                    margin-bottom: 1rem;
                }
                .question-box h3 {
                    margin: 0 0 2.5rem;
                    font-size: 1.6rem;
                    color: #2d3436;
                    line-height: 1.4;
                    min-height: 3em; 
                    font-weight: 600;
                }
                .actions {
                    display: flex;
                    gap: 1.5rem;
                    justify-content: center;
                }
                button {
                    border: none;
                    padding: 1rem 3rem;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.2rem;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .btn-yes { 
                    background: #ff7675; 
                    color: white; 
                    box-shadow: 0 4px 15px rgba(255, 118, 117, 0.3);
                }
                .btn-yes:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(255, 118, 117, 0.4); }
                
                .btn-no { 
                    background: #55efc4; 
                    color: #2d3436; 
                    box-shadow: 0 4px 15px rgba(85, 239, 196, 0.3);
                }
                .btn-no:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(85, 239, 196, 0.4); }
                
                /* Result Styles */
                .result-box { padding: 1rem; }
                .icon-alert { color: #d63031; margin-bottom: 1.5rem; }
                .icon-safe { color: #00b894; margin-bottom: 1.5rem; }
                
                .result-details {
                    background: #fff5f5;
                    border-radius: 12px;
                    padding: 1.5rem;
                    margin: 1.5rem 0;
                    text-align: left;
                }
                .types-list {
                    margin: 1rem 0 0 1.5rem;
                    color: #c0392b;
                    font-weight: 600;
                }
                .types-list li { margin-bottom: 0.5rem; }

                .alert-msg { font-size: 1.1rem; line-height: 1.6; color: #636e72; }

                .btn-reset {
                    background: transparent;
                    border: 2px solid #dfe6e9;
                    color: #636e72;
                    padding: 0.6rem 1.5rem;
                    font-size: 1rem;
                    margin-top: 2rem;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    box-shadow: none;
                }
                .btn-reset:hover { border-color: #b2bec3; color: #2d3436; transform: none; box-shadow: none; background: #f5f6fa; }

                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .fade-in { animation: fadeIn 0.5s ease; }
            `}</style>
        </div>
    );
};

export default Questionnaire;
