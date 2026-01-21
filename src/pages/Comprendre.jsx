import React from 'react';
import Questionnaire from '../components/Questionnaire';
import Violentometer from '../components/Violentometer';

const Comprendre = () => {

    // DATA: Relations Amoureuses
    const levelsLove = [
        // GREEN
        { text: "Respecte tes décisions et tes amis", color: "#6ab04c", zone: "green" },
        { text: "Accepte tes refus sans insister", color: "#6ab04c", zone: "green" },
        { text: "Est content(e) pour tes réussites", color: "#6ab04c", zone: "green" },
        { text: "T'écoute vraiment", color: "#6ab04c", zone: "green" },
        // ORANGE
        { text: "Te fait du chantage si tu refuses quelque chose", color: "#f39c12", zone: "orange" },
        { text: "Rabaisse tes opinions en public", color: "#e67e22", zone: "orange" },
        { text: "Jalouse tes amis ou ta famille", color: "#e67e22", zone: "orange" },
        { text: "Fouille ton téléphone", color: "#d35400", zone: "orange" },
        { text: "Te manipule pour que tu lui envoies des nudes", color: "#d35400", zone: "orange" },
        // RED
        { text: "T'insulte ou t'humilie", color: "#c0392b", zone: "red" },
        { text: "Menace de se suicider si tu pars", color: "#c0392b", zone: "red" },
        { text: "Te touche sans ton consentement", color: "#c0392b", zone: "red" },
        { text: "Te frappe, te pousse ou te tire", color: "#962f2f", zone: "red" },
        { text: "T'oblige à avoir des relations sexuelles", color: "#962f2f", zone: "red" }
    ];

    // DATA: Scolaire & Pro
    const levelsSchoolPro = [
        // GREEN
        { text: "T'intègre dans les groupes et projets", color: "#6ab04c", zone: "green" },
        { text: "Valorise ton travail/tes résultats", color: "#6ab04c", zone: "green" },
        { text: "Respecte tes pauses et ton temps", color: "#6ab04c", zone: "green" },
        // ORANGE
        { text: "Se moque de ton apparence", color: "#f39c12", zone: "orange" },
        { text: "T'ignore délibérément", color: "#e67e22", zone: "orange" },
        { text: "Te donne des surnoms blessants", color: "#e67e22", zone: "orange" },
        { text: "Répand des rumeurs sur toi", color: "#d35400", zone: "orange" },
        // RED
        { text: "T'insulte devant tout le monde", color: "#c0392b", zone: "red" },
        { text: "Te menace sur les réseaux sociaux", color: "#c0392b", zone: "red" },
        { text: "Te bouscule ou dégrade tes affaires", color: "#c0392b", zone: "red" },
        { text: "Te harcèle sexuellement (gestes, propos)", color: "#962f2f", zone: "red" },
        { text: "Te racket ou te vole", color: "#962f2f", zone: "red" }
    ];

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

                    {/* Definition Block */}
                    <div className="definition-box">
                        <h2>Qu'est-ce qu'un Violentomètre ?</h2>
                        <p>
                            Le Violentomètre est un outil visuel de sensibilisation conçu pour aider à mesurer le degré de violence
                            au sein d'une relation (amoureuse, scolaire, professionnelle). <br /><br />
                            Présenté sous forme de règle graduée, il rappelle ce qui relève d'une relation <strong>saine</strong> (vert),
                            d'une situation de <strong>vigilance</strong> (orange) et d'un <strong>danger</strong> avéré (rouge).
                        </p>
                    </div>

                    <div className="vio-wrappers">
                        <Violentometer
                            title="Relations Amoureuses"
                            levels={levelsLove}
                        />

                        <Violentometer
                            title="Milieu Scolaire & Professionnel"
                            levels={levelsSchoolPro}
                        />
                    </div>

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
                
                .definition-box {
                    background: #e3f2fd;
                    border-left: 5px solid #2980b9;
                    padding: 2rem;
                    border-radius: 8px;
                    text-align: left;
                    margin-bottom: 4rem;
                }
                .definition-box h2 {
                    color: #2980b9;
                    margin-top: 0;
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                }
                .definition-box p {
                    color: #34495e;
                    line-height: 1.6;
                    margin: 0;
                    font-size: 1.05rem;
                }
            `}</style>
        </div>
    );
};

export default Comprendre;
