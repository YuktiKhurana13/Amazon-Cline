import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import Logo from './logo.png';
import {auth} from './Firebase';

function Login() {
    const history=useHistory('');
    const [email,setEmail]  = useState('');
    const [password,setPassword]  = useState('');

    const login= (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch(e=>alert(e.message));
    }

    const register= (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/');
        })
        .catch(e=>alert(e.message));
    }

    return (
        <div className="login">
            <Link to="/" >
                <img className="login_logo"
                src={Logo}
                alt="" />
            </Link>
            <div className="login_container">
                <h1 >Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={(event)=>setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={(event)=>setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login_Signin"> Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login_Register">Create New Account</button>
            </div>
        </div>
    )
}

export default Login
