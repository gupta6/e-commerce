import { Route, useHistory } from 'react-router-dom'; 
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import classes from './App.module.css';
import {auth} from './fire';
import {getSetUser} from './store/actions';

import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Checkout from './Components/Checkout';

function App() {
  const history = useHistory();

  const dispatch = useDispatch();
  const checkLogin = useCallback((userId, email) => dispatch(getSetUser(userId,email)),[dispatch]);  

  useEffect( () => {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        checkLogin(user.uid, user.email);
        history.push('/');
      }
      else{
        history.push('/login');
      }
    });
  },[history, checkLogin]);

  

  return (
    <div className={classes.App}>
      <Route path='/' exact component={Home}/>
      <Route path='/login' exact component={Login}/>
      <Route path='/register' exact component={Register}/> 
      <Route path='/checkout' exact component={Checkout}/>
    </div>
  );
}

export default App;
