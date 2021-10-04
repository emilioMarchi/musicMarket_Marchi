import React from 'react';
import './Card.css';

function Card() {
    return (
        <div className='card'>
            <img alt='img'></img>
            <div className='card-info'>
                <h2>Nombre</h2>
                <p>Descripcion de producto</p>
                <h2>999</h2>
            </div>
        </div>
    )
}
export default Card;