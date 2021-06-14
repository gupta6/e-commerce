import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Header';
import Products from './Products';
import CartContext from '../context/cart-context';
import classes from '../css/Home.module.css';
import {onAddCart} from '../store/actions'; 

const Home = () => {
    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();
    const email = useSelector( state => state.email);
    const userid = useSelector( state => state.userId);
    const allCartProducts = useSelector( state => state.cart);



   

    const addToCart = (productId, categoryIndex) => {
        const product = (products[categoryIndex].data.find(p => p.id === productId));
        
        // addCart(userid, email, product, allCartProducts);

        return dispatch(onAddCart( userid, email, product, allCartProducts ));
               
    };
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data => {
                const arrangedData = [];
                const newdata = data.filter(el => el.id !== 1 )
                
                newdata.forEach( (product, index) => {
                    if(index !== 0){
                        
                        if(newdata[index-1].category === newdata[index].category){
                            arrangedData[arrangedData.length-1].data.push(product);  
                        }
                        else{                            
                            arrangedData.push({category: product.category, data: [product], id: arrangedData.length});
                        }
                    }
                    else{
                        arrangedData.push({category: product.category, data: [product], id: arrangedData.length })
                    }                    
                })
                setProducts(arrangedData);
            } );
    },[]);
    
    return(
        <div>
            <Header />
            <div className={classes.Home}>
                <div className={classes.banner}>
                    <img src='https://wallpapercave.com/wp/wp3537591.jpg' alt='banner'/>
                </div>

                <main>
                    {products.length !==0 && <CartContext.Provider value={{addToCart: addToCart}}>
                    <Products products={products} />
                    </CartContext.Provider>  }
                </main>

                
                
            </div>
        </div>
    )
};

export default Home;