import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    if(count<10)
      setCount((count) => count + 1)
  }
  const handledecrement = () => {
    if(count>0)
      setCount((count) => count - 1)
  }

  return (
    <>
      <section id="center">
        
        <div>
          <h1>COUNTER</h1>
          
        </div>
        <button
          type="button"
          className="counter"
          onClick={handleIncrement}
        >
          +
        </button>
        
        <button
          type="button"
          className="counter"
          onClick={handledecrement}
        >
          -
        </button>
        
        <h2>{count}</h2>
      </section>
    </>
  )
}

export default Counter
