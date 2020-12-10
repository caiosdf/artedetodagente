import React from 'react';
import './Navbar.css';
import {scroll} from '../../util';

function Navbar(){
    return(
        <div className="navbar">
            <div className="navbar-items-container">
                <button className="navbar-item" onClick={()=>scroll('#calendario')}>Agenda</button>
                <div className="navbar-dot"></div>
                <button className="navbar-item" onClick={()=>scroll('#sinos')}>Sinos</button>
                <div className="navbar-dot"></div>
                <button className="navbar-item" onClick={()=>scroll('#bossa')}>Bossa Criativa</button>
                <div className="navbar-dot"></div>
                <button className="navbar-item" onClick={()=>scroll('#uno')}>Um Novo Olhar</button>
            </div>
        </div>
    );
}

export default Navbar;