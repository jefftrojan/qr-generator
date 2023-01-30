import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  

  return (
    <div className="app">
      <h1> QR Code Generator</h1>
      <input
      type="text"
      placeholder="E.g https://website.com" />

      <button>
        Generate QR Code
      </button>
      
    </div>
  )
}

export default App
