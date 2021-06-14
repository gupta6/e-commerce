import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import CartProducts from './CartProducts';
import classes from '../css/Checkout.module.css';
import {onRemoveCart} from '../store/actions';

const Checkout = () => {    
    const cart = useSelector( state => state.cart );
    const userId = useSelector( state => state.userId );
    const dispatch = useDispatch();

    const removeFromCart = (productId) => {
        const newproducts = [...cart]
        const ind = newproducts.findIndex(p => p.id === productId); 
        newproducts.splice(ind,1);
        return dispatch(onRemoveCart( userId, newproducts ));
    }
    
    return (
        <div className={classes.checkout}>
            <Header/>
            <main>
                <h2>Your Shopping Cart {cart.length === 0 && 'is empty'}</h2>
                {cart.map( (p, index) => <CartProducts 
                key={index} title={p.title} image={p.image} description={p.description} price={p.price} 
                remove={removeFromCart.bind(this, p.id)} />)}
            </main>            
        </div>
    )
};

export default Checkout;