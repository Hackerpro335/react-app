import React from 'react';
import './App.css'
import Home from './components/home';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Home />
    </div>
  );
}

export default App;