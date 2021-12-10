import React from 'react';
//import {  Switch, Route } from 'react-router-dom';
import {  Routes , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';


function App() {
  return (
    <div>
      	<Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/shop' element={<ShopPage/>} />
        </Routes>
    </div>
  );
}

export default App;
