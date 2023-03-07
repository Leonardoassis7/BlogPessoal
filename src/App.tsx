import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario/>} />

        <Route path="/ListaPostagem" element={<ListaPostagem/>} />

        <Route path="/ListaTema" element={<ListaTema/>} />



      </Routes>
      <Footer />
    </Router>
    
    </>
  );
}

export default App;
