import { useState } from 'react'
import './App.css'

function App() {

  //let counter = 5

  /*const addValue = () => {
    counter = counter+1
  }*/

  //counter is updated by javascript but its not reflecting on the UI variable updation is not reflecting on the UI

  //we need to use hooks to solve the above problem

  let [counter,setCounter] = useState(5)
  const addValue = () =>{
    if(counter>19){
      setCounter(counter=20)
    }
    else{setCounter(counter+1)}
    
  }

  const subtract = () =>{
    if(counter<1){
      setCounter(counter=0)
    }
    else{
    setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>counter </h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>add </button>
      <br />
      <button onClick={subtract}>subtract</button>
    </>
  )
}

export default App
