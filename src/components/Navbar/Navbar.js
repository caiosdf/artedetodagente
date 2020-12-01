import React from 'react';
import './navbar.css';

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-items-container">
                <a className="navbar-item">Agenda</a>
                <div className="navbar-dot"></div>
                <a className="navbar-item">Sinos</a>
                <div className="navbar-dot"></div>
                <a className="navbar-item">Bossa Criativa</a>
                <div className="navbar-dot"></div>
                <a className="navbar-item">Um Novo Olhar</a>
            </div>
        </div>
    );
}

export default Navbar;