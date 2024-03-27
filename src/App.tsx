import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './Routes/PageRoutes';

function App() {
  return (
    <>
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
    </>
  );    
}

export default App;
