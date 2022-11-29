import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import { Login } from './components/Login'

import './App.css'
import { Registro } from './components/Registro'

function App() {


  return (
    <div className="">
      <Header/>
      
      <section className='flex first-letter:'>
      <Login/>
      </section>
      
    </div>
  )
}

export default App
