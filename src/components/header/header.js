import React from 'react';
import './header.css';

function Nav() {
    return (
        <nav className= "navbar">
            <a href= '#'>musicMaster</a>
            <ul className= "nav-list">
                <li><a href= '#'>Inicio</a></li>
                <li><a href= '#'>Productos</a></li>
                <li><a href= '#'>Carrito</a></li>
            </ul>
        </nav>
    )
}
export default Nav;