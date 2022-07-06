import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Page from './components/Pages/Template';
import {PersonalCard}  from './components/Cards/PersonalCard';
import LogIn from './components/Auth/LogIn';
import Register from './components/Auth/Register';
import HomePage from './components/Pages/HomePage';
import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {
  
  return ( 
  <>
   <BrowserRouter>
      <header className='app'>
        <Header/>
      </header>
    <Routes>
    <Route path="/" element={<Navigate to="/register" />}/>
      <Route path="/characters" element={<HomePage />}/>
      <Route path="/:id" element={<PersonalCard />}/>
      <Route path="/episode" element={<Page category="Episode" arrPath="characters" />}/>
      <Route path="episode/:id" element={<PersonalCard />}/>
      <Route path="/location" element={<Page category="Location" arrPath="residents" />}/>
      <Route path="location/:id" element={<PersonalCard />}/>
      <Route path="/login" element={<LogIn />}/>
      <Route path="/register" element={<Register />}/>
     
      </Routes>
    </BrowserRouter>
    
   
   
   
       
  </>
  )
}