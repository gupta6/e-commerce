import React from 'react';
import {Link, useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';



import {auth} from '../fire';
import classes from '../css/Header.module.css';

const Header = () => {
    const history = useHistory();

    const email = useSelector( state => state.email);
    const totalProducts = useSelector( state => state.cart.length);

    const dispatch = useDispatch();
    const onSignOut = ()  => dispatch({
        type: 'REMOVE_USERID'
    })
    
    const logout = () => {
        auth.signOut().then(() => {
            onSignOut();
            history.push('/login')
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <header className={classes.header}>
            <Link to='/' className={classes.home_btn}>HOME</Link>

            <div className={classes.rightSide}>
                <div className={classes.searchBar}><input type='text' /> <button className={classes.searchIcon}><SearchIcon/></button> </div>

                <Link to='/checkout' className={classes.cartDiv}>
                    <div className={classes.cart}><ShoppingCartIcon/></div>
                    <span className={classes.count}>{totalProducts}</span>
                </Link>
                <div className={classes.userOptions}>
                    <div className={classes.email}>{email}</div>
                    <div className={classes.signout} onClick={logout}>Sign Out</div>
                </div>
            </div>
            
        </header>
    )
};

export default Header;