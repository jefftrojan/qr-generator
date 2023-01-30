import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QRCode from 'qrcode'

function App() {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  const Generatecode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err, )

      console.log(url)
      setQrcode(url)
    })
  }
  

  return (
    <div className="app">
      <h1> QR Code Generator</h1>
      <input
      type="text"
      value={url}
      onChange={(evt)=> setUrl(evt.target.value)}
      placeholder="E.g https://website.com" />

      <button onClick={Generatecode}>
        Get QR Code!
        <img src={qrcode} />
      </button>
      
    </div>
  )
}

export default App
