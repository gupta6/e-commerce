import React from 'react';
import classes from '../css/CartProducts.module.css';

const cartProducts = props => {
    return (
        <div className={classes.products}>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.contentSec}>
                <h3 className={classes.title}>{props.title}</h3>
                <div className={classes.price}>&#8377; {Math.ceil(Number(props.price) * 70)}</div>
                <div className={classes.description}>{props.description}</div>
                <button className={classes.remove_btn} onClick={props.remove} >Remove from Cart</button>
            </div>
        </div>
    )
}

export default cartProducts;