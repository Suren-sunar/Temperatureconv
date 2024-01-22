import Input  from './Components/Input'
import React, { useState } from 'react'
import './App.css';


const App = () => {

  const [celsius , setCelsius] = useState('')
  const [fahrenheit , setFahrenheit] = useState('')
  


  const convertCelintoFah =(celsius)=>{
    setFahrenheit((celsius*9)/5+32)
  }

  const convertFahintoCel = (fahrenheit) =>{
setCelsius(((fahrenheit-32)*5)/9)

  }

  const handleReset = () =>{
    setCelsius('')
    setFahrenheit('')
  }

  const handlerCelChange =(event) =>{
    const newcel = event.target.value
    setCelsius(newcel)
    convertCelintoFah(newcel)
  }

  const handlerFahChange = (event) =>{
    const newFah = event.target.value
    setFahrenheit(newFah)
    convertFahintoCel(newFah)
  }

  

  return (
    <>
    <h1>Convert The Temperature</h1>
     < Input temp='Celsius' 
     value={celsius} 
     onChange={handlerCelChange}/>
     
     < Input temp='Fahrenheit'
      value={fahrenheit}
       onChange={handlerFahChange}/>
    
     <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
