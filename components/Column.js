import { AnimatePresence,motion } from 'framer-motion'
import React, { useState } from 'react'

const Column = ({guess, isFinal, solution}) => {

  
  return (
    <div className=''>
      {isFinal ? (
        <div  className="flex justify-center w-full h-full py-[3px]">
          <motion.div 
            animate={{rotateX: [0, 90, 0] }} 
            transition={{ delay: 0 , duration: .5}} 
            className={`${isFinal ? solution.includes(guess[0]) 
            ? guess[0] == solution[0] ? "correct" : "close" : "fill" 
            : "normal"}`} 
          >
            {guess[0]}
          </motion.div>

          <motion.div 
            animate={{rotateX: [0, 90, 0]}} 
            transition={{ delay: .15, duration: .5}} 
            className={`${isFinal ? solution.includes(guess[1]) ? 
            guess[1] == solution[1] ? "correct" : "close" : "fill" : 
            "normal"}`} 
          >
            {guess[1]}
          </motion.div>

          <motion.div 
            animate={{rotateX: [0, 90, 0]}} 
            transition={{ delay: .3, duration: .5 }} 
            className={`${isFinal ? solution.includes(guess[2]) ? 
            guess[2] == solution[2] ? "correct" : "close" : "fill" : 
            "normal"}`} 
          >
            {guess[2]}
          </motion.div>

          <motion.div 
            animate={{rotateX: [0, 90, 0]}} 
            transition={{ delay: .45 , duration: .5}} 
            className={`${isFinal ? solution.includes(guess[3]) ? 
            guess[3] == solution[3] ? "correct" : "close" : "fill" : 
            "normal"}`} 
          >
            {guess[3]}
          </motion.div>

          <motion.div 
            animate={{rotateX: [0, 90, 0]}} 
            transition={{ delay: .6, duration: .5 }} 
            className={`${isFinal ? solution.includes(guess[4]) ? 
            guess[4] == solution[4] ? "correct" : "close" : "fill" : 
            "normal"}`} 
          >
            {guess[4]}
          </motion.div>
        </div>
      ) : (
        <div className="flex justify-center w-full h-full py-[3px]">
          <div className={`${isFinal ? solution.includes(guess[0]) ? guess[0] == solution[0] ? "correct" : "close" : "fill" : "normal"}`} >{guess[0]}</div>
          <div className={`${isFinal ? solution.includes(guess[1]) ? guess[1] == solution[1] ? "correct" : "close" : "fill" : "normal"}`} >{guess[1]}</div>
          <div className={`${isFinal ? solution.includes(guess[2]) ? guess[2] == solution[2] ? "correct" : "close" : "fill" : "normal"}`} >{guess[2]}</div>
          <div className={`${isFinal ? solution.includes(guess[3]) ? guess[3] == solution[3] ? "correct" : "close" : "fill" : "normal"}`} >{guess[3]}</div>
          <div className={`${isFinal ? solution.includes(guess[4]) ? guess[4] == solution[4] ? "correct" : "close" : "fill" : "normal"}`} >{guess[4]}</div>
        </div>
      )}
        
    </div>
  )
}

export default Column