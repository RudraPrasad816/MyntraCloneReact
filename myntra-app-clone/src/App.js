import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import { Home, ProductsPage, CartPage, LoginPage, RegisterPage, Error, ProductPage } from './pages';
import data from './data/data';
import { auth } from './firebase';

export const DataContext = React.createContext(data);

function App() {

  const [newData, setNewData] = useState(data);

  const setNewDataClick = (filtereddata) => {
    setNewData(filtereddata);
  }
  const [user, setUser] = useState({ name: "", email: "" })

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    })
  }, [])

  return (
    <>
      <DataContext.Provider value={{ newData, setNewDataClick, user }} >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/products/:page" element={<ProductsPage />} />
            <Route path="/products/:page" element={<ProductsPage />} />
            <Route path='/create-new-account' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  )
}

export default App;
