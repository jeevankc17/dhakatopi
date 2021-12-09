import React from 'react';
//import {  Switch, Route } from 'react-router-dom';
import {  Routes , Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage/HomePage';


const DhakaTopiPage =() => (
  <div>
    <h1> DhakaTopiPage </h1>
  </div>
);
function App() {
  return (
    <div>
      	<Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/dhakatopis' element={<DhakaTopiPage/>} />
        </Routes>
    </div>
  );
}

export default App;
