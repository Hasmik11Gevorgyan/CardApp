import { useState } from 'react'

import './App.css'
import Header from './components/header/header'

import Footer from './components/footer/Footer'
import Aside from './components/aside/Aside'
import Main from './components/main/main'


function App(){

  const [cards,setcards]=useState(
    
    [
    {number:1,
    key:1 },
    {number:2,
    key:2},
    {number:3,
    key:3},
      {number:4,
       key:4},
      {number:5,
      key:5}
  ]);
  return <div className='Card-aplication'>
<div  className='Main-content'>
      <Header/>
      <Main  cards={cards}/>
      
      </div>
      <Footer/>
<Aside/>
  </div>
}
export default App
