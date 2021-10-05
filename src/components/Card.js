import React from 'react';
import './Card.css';


function Card() {
    const [counter, setCounter] = React.useState(0);
    const [stock, setStock] = React.useState(4);

    const removeProdCounter = () => {
        if(counter==0){
        }else{
            setCounter(counter-1);
        }
    }
    const addProdCounter = () => {
        if(counter < stock){
            setCounter(counter+1)
        } else{}
    }

    return (
        <div className='card'>
            <img alt='img'></img>
            <div className='card-info'>
                <h2>Nombre</h2>
                <p>Descripcion de producto</p>
                <h2>999</h2>
            </div>
            <div className='account'>
            <button onClick={removeProdCounter} className='remove'>-</button>
            <p>{counter}</p>
            <button onClick={addProdCounter} className='add'>+</button>
            </div>
        </div>
    )
}
export default Card;