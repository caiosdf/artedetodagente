import React from 'react';
import './UnoSec.css';

import logo from '../../assets/img/logo-uno.png';
import imgUno from '../../assets/img/img-uno.png';

function Uno(){
    return(
        <section className="full-section-uno">
            <div className="col-1-uno">
                <img className="logo-uno" src={logo}/>
                <p className="text-section-uno">O Um Novo Olhar reúne capacitações em arte-educação e em regência coral, para promover a arte como forma de inclusão e acesso de crianças, jovens e adultos com deficiência. Ao longo de 2020, mais de 70 artistas e educadores se dividem entre cerca de 200 horas de performances, apresentações e capacitações, além de publicações, palestras e eventos com especialistas de diversos países.</p>
                <a className="button" href="https://umnovoolhar.art.br/">VISITE O SITE</a>
            </div>
            <div className="col-2-uno">
                <img className="img-uno" src={imgUno}/>
            </div>
        </section>
    );
}

export default Uno;