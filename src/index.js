import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Batafsil from './components/batafsil/batafsil';
import Navbar from './components/navbar';
import Card from './components/card';
import Home from './components/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
            <Route path='/' element={<Navbar />}/>
            <Route index element={<Home />} />
            <Route path='/card' element={<Card />} />
            <Route path='/batafsil' element={<Batafsil />} />
        </Route>


      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
