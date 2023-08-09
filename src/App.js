import './App.css';
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Card from './components/card';
import Jamoa from './components/jamoa';
import Vidio from './components/vidio';
import BizH from './components/biz_h';
import Boglanish from './components/boglanish';
import Home from './components/home';

// useEffect(() => {
// }, []);
// function card_anim() {
//   VanillaTilt.init(document.querySelectorAll(".box"), {
//     max: 15,
//     speed: 400,
//     grale: true,
//     "max-glare": 1
//   });
// }
// card_anim()


function App() {
  return (
    <div className="App">
      {/* <div className='container'> */}
        <Navbar />
        <Outlet/>
      {/* </div> */}
    </div>
  );
}

export default App;
