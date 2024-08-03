
import { useState } from 'react';
import Demo from './demo.jsx'

function App() {
 
  const [counter,setCounter] = useState(13)
  // let counter=13;
  const addValue=()=>{
 setCounter((prevCounter)=>prevCounter+1)
 setCounter((prevCounter)=>prevCounter+1)
 setCounter((prevCounter)=>prevCounter+1)

  }
const removeValue=()=>{
  
  setCounter(counter-1)
}

  return (
    <>
    <h1>Hi saniya</h1>
    <h2>Counter value:{counter}</h2>
    <button onClick={addValue}>Add value:{counter}</button>
    <button onClick={removeValue}>Remove Value:{counter}</button>
    <p>Footer:{counter}</p>

      <Demo/>
   </>
  );
}

export default App
