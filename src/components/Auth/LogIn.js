import React, { useState, useEffect, useRef } from "react";
import {Form, Button} from "react-bootstrap";

import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import logo from  '../../img/rick_morty.png';
import './Auth.css';

const LogIn = () => {
    const userRef = useRef();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')
    const [error, setErr] = useState(false);
    const [success, setSuccess] = useState(false); 

    useEffect(()=>{
        userRef.current.focus();
    },[])

    const navigate = useNavigate();
 
    let handleSubmit = (e)=> {
        e.preventDefault()
        signInWithEmailAndPassword(auth, user, password)
        .then(auth => {
            setSuccess(true);
            navigate('/characters')
        })
        .catch(err => setErr(true))
      }

  return (    
  <section >
    <div className="reg-container">
      <img src={logo} alt="logo" className="logo"/>
      <Form onSubmit={handleSubmit} className="form">
        
        <h2 style={{'textAlign': 'center','margin':'10px'}}>Log In</h2>
   
      <Form.Group className="mb-3" >
        <Form.Label htmlFor="email"> Email:</Form.Label>
        <Form.Control 
            id="email"
            ref={userRef}    
            autoComplete="off"
            onChange={(e)=> setUser(e.target.value.toLowerCase())}
            onFocus={()=>setErr(false)}
            value={user}
            required
            placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control 
            title="8 to 24 characters.
            Must include uppercase and lowercase letters, a number and a special character"
            id="password"
            onChange={(e)=> setPassword(e.target.value)}
            onFocus={()=>setErr(false)}
            value={password}
            required
            type="password" placeholder="Enter your password" />
      </Form.Group>
    
       {error ? <span className="logoColor pb-3">Can't login. Please check your data and repeat</span> : null}

      <Button variant="primary" type="sumbit" className="authLink">Sign In</Button>
      </Form>

      <p className="regInfo"> Don't have account yet? Create it!</p>

      <Link to="/register">
      <Button variant="primary" style={{"width":"100%"}}  className="authLink">Sign Up</Button>
      </Link>
      </div>
      </section>
  )
}

export default LogIn;