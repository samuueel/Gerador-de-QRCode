import { useState } from 'react'
import QRCode from 'react-qr-code'
import QRCodeLink from 'qrcode'

import './App.css'

function App() {

  const [qrcode, setqrcode] = useState("")
  const [link, setlink] = useState("")

  function handleGenerate(link_url){
    QRCodeLink.toDataURL(link_url,{
      width: 500,
      margin: 3
    },function(err, url){
      setqrcode(url)
    })
  }

  function handleQrCode(e){
    setlink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    <div className="container">

      <QRCode
        value={link}
      />

      <input 
      className="input" 
      value={link}
      onChange={(e) => handleQrCode(e)}
      placeholder='Digite seu link...' />
      
      <a href={qrcode} download={"qrcode.png"}><button className="btn">BAIXAR QRCODE</button></a>
    </div>
  )
}

export default App
