import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Createaccount from './pages/UserCreateAccount/Createaccount.jsx';
import ErroPage from './pages/Erropage/Erropage.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(

    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CriarConta" element={<Createaccount />} />
          <Route path="*" element={<ErroPage error={{ message: 'Página não encontrada' }} />} />
       
         
        </Routes>
      </Router>
    </React.StrictMode>

);