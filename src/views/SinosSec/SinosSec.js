import React from 'react';
import './SinosSec.css'

import logo from '../../assets/img/logo-sinos.png';
import flautista from '../../assets/img/flautista.png';

function SinosSec(){

    return(
        <>
            <section id="sinos" className="full-section-sinos">
                <section className="red-section"></section>
                <section className="sinos-container">
                    <section className="col-1">
                        <img className="logo-sinos" src={logo} alt="logo do projeto sinos"/>
                        <p className="text-section">O Sinos é sustentado por uma rede de dezenas de profissionais de música, que atuam em cursos, oficinas, concertos e festivais. O objetivo é capacitar regentes, instrumentistas, compositores e educadores, apoiando projetos sociais de música, e contribuir para o desenvolvimento das orquestras-escola do Brasil. Em 2020, serão 472 videoaulas, com 188 horas de conteúdo.</p>
                        <a className="button" href="https://sinos.art.br/">VISITE O SITE</a>
                    </section>
                    <section className="col-2">
                        <img className="img-flautista" src={flautista} alt="pessoa tocando flauta"/>
                    </section>
                </section>
            </section>
        </>
    );

}

export default SinosSec;