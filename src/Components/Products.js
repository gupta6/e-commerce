import React from 'react';

import Product from './Product';
import classes from '../css/Products.module.css';

const Products = props => {
    return (
        props.products.map( (products, index) => <div className={classes.productRow} key={products.id}> 
            <h2 className={classes.category}>{products.category}</h2>
            <div className={classes.productsList}  >               
                {products.data.map(product => <div className={classes.product} key={product.id} >
                    <Product 
                    title={product.title} 
                    image={product.image} 
                    des={product.description} 
                    price={product.price}
                    categoryIndex = {index} 
                    id={product.id}/>
                </div>
            )}           
            </div>
        </div>)
    )
};

export default Products;