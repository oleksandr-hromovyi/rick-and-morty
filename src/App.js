import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Episodes from './components/Pages/Episodes';
import Location from './components/Pages/Location';
import {CardInfo}  from './components/Cards/CardInfo';
import LogIn from './components/Authorization/LogIn';
import Register from './components/Authorization/Register';
import HomePage from './components/Pages/HomePage';

export default function App() {

  return ( 
  <>
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navigate to="/register" />}/>
      <Route path="/characters" element={<HomePage />}/>
      <Route path="/:id" element={<CardInfo />}/>
      <Route path="/episodes" element={<Episodes />}/>
      <Route path="episodes/:id" element={<CardInfo />}/>
      <Route path="/location" element={<Location />}/>
      <Route path="location/:id" element={<CardInfo />}/>
      <Route path="/login" element={<LogIn />}/>
      <Route path="/register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}