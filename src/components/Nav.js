import React from 'react';
import './Nav.css';
import Cart from './Cart';

function Nav() {
    return (
        <nav className= "navbar">
            <a href= '#'>musicMaster</a>
            <ul className= "nav-list">
                <li><a href= '#'></a></li>
                <li><a href= '#'>Productos</a></li>
                <li><a href= '#'>Carrito</a></li>
            </ul>
            <Cart/>
        </nav>
    )
}
export default Nav;