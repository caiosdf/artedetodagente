import React from 'react';
import './ArteDeTodaGenteSec.css';
import logo from '../../assets/img/logo-home.png';
import icoYoutube from '../../assets/img/ico-youtube.png';
import YouEmbed from '../../components/YouEmbed/YouEmbed';
import {scroll} from '../../util';

function ArteDeTodaGente(){

    return(
        <section className="full-section">      
            <section className="logo-adtg">
                <img src={logo} alt="logo do projeto arte de toda gente"></img>
            </section>
            <section className="adtg-content">
                <div className="text-container">
                    <p className="text-section">O Arte de Toda Gente engloba os projetos Bossa Criativa – Arte de Toda Gente, Um Novo Olhar e Sistema Nacional de Orquestras Sociais – Sinos; frutos da parceria entre a Fundação Nacional da Artes - Funarte e a Universidade Federal do Rio de Janeiro - UFRJ, com a curadoria de sua Escola de Música, envolvendo artistas e educadores, compartilhando cultura e conhecimento.</p>
                    <button className="button" onClick={()=>scroll('#sinos')}>Conheça os projetos</button>
                </div>
                <section className="video-frame-container">
                    <YouEmbed url={'https://youtu.be/qGY4rgFvQCU'} />
                    <div className="video-frame-footer">
                        <a className="youtube-button" href="https://www.youtube.com/channel/UC5RwQ_KlODEtsnK4mRufQNg" target="blank">
                            <img src={icoYoutube} alt="logo youtube"></img>
                            <p>INSCREVA-SE</p>
                        </a>
                        <p>NO CANAL ARTE DE TODA GENTE</p>
                    </div>
                </section>
            </section>            
        </section>
    )
    
}

export default ArteDeTodaGente;