import React, { useState } from 'react'

function KeyBoard({currentGuess, setCurrentGuess}) {
    const [key, setKey] = useState("")

    const handleKey = (key) => {
    
        if(currentGuess.length >= 5) {
          return;
        } else {
          setCurrentGuess((oldGuess => oldGuess + key));
        }
      }

  return (
    <div><button onClick={handleKey("a")}>A</button></div>
  )
}

export default KeyBoard