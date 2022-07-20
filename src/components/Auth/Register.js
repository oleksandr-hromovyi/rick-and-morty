import React, { useState, useEffect, useRef } from "react";
import {Form, Button} from "react-bootstrap";
import { X, Check, BookmarkCheck} from 'react-bootstrap-icons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { Link } from 'react-router-dom';

import logo from  '../../img/rick_morty.png'
import './Auth.css'

const EMAIL_REGEX = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,3}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{5,15}$/;



const Register = () => {

    const emailRef = useRef();
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false); 
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [error, setErr] = useState(false);
    const [success, setSuccess] = useState(false); 

    useEffect(()=>{
        emailRef.current.focus();
    },[])

    useEffect(()=>{
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result)
    },[email])

    useEffect(()=>{
        const result = PWD_REGEX.test(password);
        setValidPassword(result);
    },[password])
    
    let check = (validProp)=> {
        let checkIcon = validProp ? <Check color="green" size={30} name="correct-data"/> : <X color="#9F0013" size={30} name="wrong-data"/>
        return checkIcon;
    }
   
    let handleSubmit = (e)=> {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(auth => setSuccess(true))
        .catch(err => setErr(true))
    }

return (
    <>
    <section >
      <div className="reg-container">
        <img src={logo} alt="logo" className="logo"/>
        {! success ? (<Form onSubmit={handleSubmit} className="form">
        <h2 style={{'textAlign': 'center','margin':'10px'}}>Registrarion</h2>
        {error ? <h3 className="logoColor" style={{'textAlign': 'center'}}>Error</h3> : null}
        <Form.Group className="mb-3" >
        <Form.Label htmlFor="email"> {  check(validEmail) }Email:</Form.Label>
        <Form.Control 
            type="email"
            id="email"
            ref={emailRef}    
            autoComplete="off"
            onChange={(e)=> setEmail(e.target.value.toLowerCase())}
            required
            onFocus={()=>setEmailFocus(true)}
            onBlur={()=>setEmailFocus(false)}
            placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label htmlFor="password">{ check(validPassword) }Password</Form.Label>
        <Form.Control 
            title="8 to 24 characters.
            Must include uppercase and lowercase letters, a number and a special character"
            id="password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            required
            onFocus={()=>setPasswordFocus(true)}
            onBlur={()=>setPasswordFocus(false)}
            type="password" placeholder="Password" />
          </Form.Group>
    
            <Button variant="primary" type="submit" className="authLink" disabled={!validEmail || !validPassword ? true : false}>
            Sign Up
            </Button>
        </Form> 
  
  ) : ( <h2 className='text-center mt-3'>Registration is successful <BookmarkCheck color="green" /></h2>)}
        
        {!success ? (<p className="regInfo"> Already registered?</p>) : (<p className="regInfo"> Please click on the link below:</p>)}
          <Link to="/login">
          <Button variant="primary" style={{"width":"100%"}} className="authLink">Sign In</Button>
          </Link>
      
      </div>
    </section>
  </>
  )
}

export default Register;