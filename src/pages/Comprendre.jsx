import React from 'react';
import Questionnaire from '../components/Questionnaire';
import Violentometer from '../components/Violentometer';

const Comprendre = () => {
    return (
        <div className="page-container page-fade-in">
            <section className="section-header">
                <div className="container">
                    <h1>Comprendre ce que tu vis</h1>
                    <p className="subtitle">Des outils pour t'aider à mettre des mots sur ta situation.</p>
                </div>
            </section>

            <section className="tool-section">
                <div className="container">
                    <Questionnaire />
                </div>
            </section>

            <section className="tool-section alt-bg">
                <div className="container center-container">
                    <div className="vio-intro-text">
                        <h2>Le Violentomètre</h2>
                        <p className="intro-desc">
                            Cet outil est conçu pour évaluer si ta relation <strong>amoureuse</strong> avec ton ou ta partenaire est saine,
                            ou si elle comporte des violences.
                        </p>
                    </div>
                    <Violentometer />
                </div>
            </section>

            <style>{`
                .page-container { padding-bottom: 4rem; }
                .section-header {
                    background: #f8f9fa;
                    padding: 4rem 0 2rem;
                    text-align: center;
                }
                .subtitle { color: #636e72; font-size: 1.1rem; }
                .tool-section { padding: 4rem 0; }
                .alt-bg { background: #fff; border-top: 1px solid #f1f2f6; }
                
                .center-container { max-width: 900px; margin: 0 auto; }
                
                .vio-intro-text {
                    text-align: center;
                    max-width: 700px;
                    margin: 0 auto 1rem;
                }
                .intro-desc {
                    font-size: 1.1rem;
                    color: #546e7a;
                    line-height: 1.5;
                }
            `}</style>
        </div>
    );
};

export default Comprendre;
