import React, { useState, useEffect } from 'react'

export default function CustomButton(props) {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setCounter(5)

    return () => {
      console.log('Unmounting funky component');
    }
  }, [])

  const incrementCount = () => {
    setCounter(counter + 1)
  }

  return (
    <div style={{
        display: 'inline-block',
        border: '1px solid gray',
        padding: '10px',
        margin: '10px',
        userSelect: 'none',
        cursor: 'pointer'
      }}
      onClick={incrementCount}
     >
       {props.label} count: {counter}
    </div>
  )
}




