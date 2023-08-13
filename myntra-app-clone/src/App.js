import React from 'react';
import './App.css';
import Header from './Header.js';
import FilterPage from './Components/FilterPage';
import CartPage from './Components/CartPage.jsx';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/'  element={<FilterPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;