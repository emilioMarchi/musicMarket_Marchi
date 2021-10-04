import React from 'react';
import './Cart.css';


function Cart() {
    let productsSelected = [1,2,3,4];
    let i = productsSelected.length; 
    return (
        <div className='Cart'>
            <i class="fas fa-shopping-cart"></i>
            <p><strong>{i}</strong></p>
        </div>
    )
}
export default Cart;