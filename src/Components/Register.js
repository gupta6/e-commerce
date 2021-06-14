import React, { useState } from 'react';
import { useHistory } from 'react-router';

import {auth} from '../fire';
import classes from '../css/Form.module.css';

const Register = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    

    const registerHandler = event => {
        event.preventDefault();        

        auth.createUserWithEmailAndPassword(email, password)
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
                <h1>Sign-up</h1>
                <form onSubmit={registerHandler} className={classes.form}>
                    <span>Email</span>
                    <input type='text' name='Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <span>Password</span>
                    <input type='password' name='Password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                    <button className={classes.signIn}>Sign up</button>
                </form>                
            </div>
        </div>    
    );
}

export default Register;