import React from 'react';
import './Footer.css';
import marcas from '../../assets/img/uno-marcas.png'

function Footer(){
    return(
        <div className="footer">
            <img className="marcas" src={marcas} alt="marcas relacionadas ao projeto"/>
        </div>
    );
}

export default Footer;