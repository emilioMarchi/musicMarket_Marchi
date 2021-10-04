import React from 'react';
import './ItemsContainer.css';
import Card from './Card';

function ItemsContainer() {
    return (
        <section className='container'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </section>
    )
}
export default ItemsContainer;