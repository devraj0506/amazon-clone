import React, {useState} from 'react'
import './login.css'
import {Link, useHistory} from "react-router-dom"
import {auth} from "./firebase.js"


function Login() {
    const history = useHistory();

    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');



    const login=event=> {
        event.preventDefault(); //this stops the refresh

        //login logic
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            // logged in redirect to home page
            history.push("/")
        })
        
        .catch((e)=>alert(e.message))
        
    }
    
    
    const register=event=> {
        event.preventDefault(); //this stops the refresh
        
        //register logic
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            // logged in redirect to home page
            
        })
        .catch((e)=>alert(e.message))

    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='login-logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>


            <div className="login-container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input value={email} onChange={event=>setEmail(event.target.value)} type="text" />
                    <h5>Password</h5>
                    <input value={password} onChange={event=>setPassword(event.target.value)} type="text"/>
                    <button onClick={login}  type="submit" className="signin-btn">Sign in</button>

                </form>

                <p>
                    By signing-in you agree to Amazon's Conditions of use & sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
                </p>

                <button onClick={register} className="register-btn">Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
