import { useState } from 'react'

import './App.css'
import Home from './components/Home/home'
import Counter from './components/useState/useState'
import Card from './components/Card'
import Props from './components/Props/Props'
import rodrigo from './assets/rodrigo.jpeg'
import calleri from './assets/caleri.jpg'
import duolingo from './assets/duolingo.png'

function App() {


  return (
    <>
      <section id="Props">
  
       <Props title={'Rodrigo Neto'} provider={'Desenvolvedor'} img={rodrigo}/> 
        <Props title={'Calleri'} provider={'Atacante'} img={calleri}/>
        <Props title={'Duolingo'} provider={'Teacher'} img={duolingo}/>
    
      </section>

      {/* <Card /> */}
      {/* <Home /> */}
      {/* <Counter/> */}
    </>
  )
}

export default App
