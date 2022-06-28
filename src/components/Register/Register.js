import React, {useREf, useState, useEffect, useRef } from "react";
import {Form, Button} from "react-bootstrap";
import { X, Check } from 'react-bootstrap-icons';
import './Register.css'
import axios from "axios";
import logo from  '../../img/rick_morty.png'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{4,11}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{5,15}$/;



const Register = () => {
 const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false); 
    const [passwordFocus, setPasswordFocus] = useState(false);

 
    const [validMatch, setValidMatch] = useState(false); 
    const [MatchFocus, setMatchFocus] = useState(false);

 /*    const [err, serErr] = useState('');
    const [success, setSuccess] = useEffect(false); */

    useEffect(()=>{
        userRef.current.focus();
    },[])

 useEffect(()=>{
        const result = USER_REGEX.test(user);
        console.log(result)
        console.log(user)
        setValidName(result)
    },[user])

    useEffect(()=>{
        const result = PWD_REGEX.test(password);
        console.log(result)
        console.log(password)
        setValidPassword(result);
       
    },[password])

    
/*     useEffect(()=>{
        setErr("");
   }, [user, pwd, matchPwd])
 */

 let check = (validProp)=> {
    let checkIcon = validProp ? <Check color="green" size={30} name="correct-data"/> : <X color="red" size={30} name="wrong-data"/>
    return checkIcon;

}
   
let handleSubmit = async (e)=> {
    e.preventDefault()
    axios.post(`https://614232e74d16670017ba2c70.mockapi.io/users`, { user, password })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
   
    <section >
      
        
        <div className="container">
        <p className="logoName"><span>Rick & Morty</span> WIKI</p>
        <img src={logo} className="logo"/>
        <Form onSubmit={handleSubmit}>
        
    <h2 style={{'textAlign': 'center','margin':'10px'}}>Registrarion</h2>
    <Form.Group className="mb-3" >
      <Form.Label htmlFor="username"> {  check(validName) }Username: </Form.Label>
      <Form.Control 
            title="5-12 characters. Must begin with a letter.
            Letters, numbers, underscores, hyphens allowed."
            type="text"
            id="username"
            ref={userRef}    
            autoComplete="off"
            onChange={(e)=> setUser(e.target.value)}
            required
            aria-invalid={validName ? "false" : "true"}
            /* aria-describedly="uidnote" */
            onFocus={()=>setUserFocus(true)}
            onBlur={()=>setUserFocus(false)}
            placeholder="Enter username" />
            
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
            
            /* aria-describedly="uidnote" */
            onFocus={()=>setPasswordFocus(true)}
            onBlur={()=>setPasswordFocus(false)}
            

      type="password" placeholder="Password" />
    </Form.Group>
    
    <Button variant="primary" type="submit" disabled={!validName || !validPassword ? true : false}>
      Sign Up
    </Button>
  </Form>
  <p> Already registered?</p>
  <a href=''>Sign in</a></div></section>
  
  
  )
}

export default Register