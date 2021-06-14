import React, { useContext } from 'react';

import CartContext from '../context/cart-context';
import classes from '../css/Product.module.css';

const Product = props => {
    const cart = useContext(CartContext);

    return (
        <div>
            <h3 className={[classes.title,classes.overflow].join(' ')}>{props.title}</h3>
            <p className={classes.description}>{props.des}</p>
            <p className={classes.price}><strong>&#8377; {Math.ceil(Number(props.price) * 70)}</strong></p>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>           
            <div className={classes.cartDiv} onClick={cart.addToCart.bind(this, props.id, props.categoryIndex)} ><button>Add to Cart</button></div>
        </div>
    )
}

export default Product;