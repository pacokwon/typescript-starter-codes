import React, { useState } from 'react'

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
    </div>
  )
}

export default Counter;
