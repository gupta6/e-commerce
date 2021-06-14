import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../fire';

import classes from '../css/Form.module.css';



const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   

    const loginHandler = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
        //   const user = userCredential.user;
          history.push('/');
          // ...
        })
        .catch((error) => {
          alert(error.message);
        });
    }

    return (
        <div className={classes.mainDiv}>
            <div className={classes.formDiv}>
                <h1>Sign-in</h1>
                <form onSubmit={loginHandler} className={classes.form}>
                    <span>Email</span>
                    <input type='text' name='Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <span>Password</span>
                    <input type='password' name='Password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                    <button className={classes.signIn}>Sign in</button>
                </form>

                <div className={classes.or_txt}>
                    <span></span>
                    <p>OR</p>
                    <span></span>
                </div>
                <Link to='/register'><button className={classes.signUp}>Sign up</button></Link>                
            </div>
        </div>    
    );
}

export default Login;