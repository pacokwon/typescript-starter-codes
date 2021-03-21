import React, { useState } from 'react'

const MinusButton = ({ setCount, children }) => {
  const handleClick = () => setCount(count => count - 1);

  return <button onClick={handleClick}>{children}</button>
}

const PlusButton = ({ setCount, children }) => {
  const handleClick = () => setCount(count => count + 1);

  return <button onClick={handleClick}>{children}</button>
}

const ComplicatedCounter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <MinusButton setCount={setCount}>-</MinusButton>
      {count}
      <PlusButton setCount={setCount}>+</PlusButton>
    </div>
  )
}

export default ComplicatedCounter;
