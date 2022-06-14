import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  const decrementCount = () => {
    setCount(count - 1)
  }

  return (
    <div className='counter'>
      <button className='decrement_btn' onClick={decrementCount}>
        -
      </button>
      <div className='count_number'> {count}</div>
      <button className='increment_btn' onClick={incrementCount}>
        +
      </button>
    </div>
  )
}

export default Counter
