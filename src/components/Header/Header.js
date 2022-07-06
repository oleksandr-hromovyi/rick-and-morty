import React from 'react';
import './Header.css';
import NavigationBar from '../NavigationBar/NavigationBar'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const signOutClick = () =>{
    auth.signOut(); 
    navigate('/register');}
    
    return (
    <>
     <div className="logOut">
        <h5>Welcome, {user?.email ? user?.email : "guest"}</h5>
       { user ? (<Button
        className = "sign-out-btn"
        onClick={()=>signOutClick()}>Sign out</Button>) :
       ( <Button
        className = "sign-out-btn"
        onClick={()=>navigate('/logIn')}>Sign in</Button>)
        }
        </div>
    <div className="app__header">
    <Link to="/characters" className="app__title">
        
            <p><span>Rick & Morty</span> WIKI</p>
        
    </Link>

    <NavigationBar/>
    </div>
  </>
  )
}

export default Header;