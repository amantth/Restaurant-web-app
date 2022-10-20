import React from 'react'
import Card from './components/Card'
import Category from './components/Category'
import Food from './components/Food'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />  
      <Hero />
      <Card />
      <Food />
      <Category />
    </div>

  )
}

export default App
