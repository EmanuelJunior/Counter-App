import React, { useState } from 'react'


export const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: { count }</h1>
      
      <button onClick={ () => setCount( count + 1 ) }>
        Click for increment
      </button>

      <button onClick={ () => setCount( count - 1 ) }>
        Click for decrement
      </button>
    </div>
  )
}
