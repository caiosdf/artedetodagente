import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-items-container">
                <a className="navbar-item">Agenda</a>
                <div className="navbar-dot"></div>
                <a className="navbar-item" href="#sinos">Sinos</a>
                <div className="navbar-dot"></div>
                <a className="navbar-item" href="#bossa">Bossa Criativa</a>
                <div className="navbar-dot"></div>
                <a className="navbar-item" href="#uno">Um Novo Olhar</a>
            </div>
        </div>
    );
}

export default Navbar;