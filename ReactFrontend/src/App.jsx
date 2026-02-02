import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function getData(){
    alert("Hi....inside get")
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Welcome to React App</h2>
      <button onClick={getData}>Fetch data</button>
    </>
  )
}

export default App
