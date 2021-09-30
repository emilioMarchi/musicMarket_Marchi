import React from 'react';
import './ItemsContainer.css';

function ItemsContainer() {
    return (
        <section className='container'>
            <card className='card'>
                <img alt='img' />
                <h3>Nombre</h3>
                <h4>Precio</h4>
            </card>
            <card className='card'>
                <img alt='img' />
                <h3>Nombre</h3>
                <h4>Precio</h4>
            </card>
            <card className='card'>
                <img alt='img' />
                <h3>Nombre</h3>
                <h4>Precio</h4>
            </card>
        </section>
    )
}
export default ItemsContainer;