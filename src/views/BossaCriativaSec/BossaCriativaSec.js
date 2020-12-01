import React from 'react';
import './BossaCriativaSec.css';

import logo from '../../assets/img/logo-bossa.png';
import cangaceiro from '../../assets/img/cangaceiro.png';
import boy from '../../assets/img/boy.png';

function bossaCriativa(){
    return(
        <section className="full-section-bossa">
            <img className="cangaceiro" src={cangaceiro}/>
            <div className="content-container">
                <div className="logo-container">
                    <img className="boy" src={boy}/>
                    <img className="logo-bossa" src={logo}/>
                </div>
                <section className="text-section-bossa">
                    <p>No Bossa Criativa, arte, cultura e inclusão têm como palco a internet e patrimônios da humanidade. São mais de 180 artistas e educadores, de várias regiões do país, em apresentações, lives e oficinas de capacitação nas áreas de música, circo, artes visuais, dança, teatro e gestão cultural. Mais de 200 horas de conteúdo já estão no ar, com foco na diversidade e democratização da cultura.</p>
                </section>
                <a className="button" href="https://www.bossacriativa.art.br/">VISITE O SITE</a>
            </div>
        </section>
    );
}

export default bossaCriativa;