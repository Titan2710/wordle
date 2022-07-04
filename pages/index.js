import Head from 'next/head'
import { useEffect, useState } from 'react'
import Column from '../components/Column'
import { WORDS } from '../components/word';
import { motion } from 'framer-motion';

export default function Home() {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [solution, setSolution] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const handleQ = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'q'));
    }
  }
  const handleW = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'w'));
    }
  }
  const handleE = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'e'));
    }
  }
  const handleR = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'r'));
    }
  }
  const handleT = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 't'));
    }
  }
  const handleY = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'y'));
    }
  }
  const handleU = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'u'));
    }
  }
  const handleI = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'i'));
    }
  }
  const handleO = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'o'));
    }
  }
  const handleP = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'p'));
    }
  }
  
  const handleA = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'a'));
    }
  }
  const handleS = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 's'));
    }
  }
  const handleD = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'd'));
    }
  }
  const handleF = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'f'));
    }
  }
  const handleG = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'g'));
    }
  }
  const handleH = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'h'));
    }
  }
  const handleJ = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'j'));
    }
  }
  const handleK = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'k'));
    }
  }
  const handleL = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'l'));
    }
  }

  const handleZ = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'z'));
    }
  }
  const handleX = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'x'));
    }
  }
  const handleC = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'c'));
    }
  }
  const handleV = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'v'));
    }
  }
  const handleB = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'b'));
    }
  }
  const handleN = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'n'));
    }
  }
  const handleM = () => {
    
    if(currentGuess.length >= 5) {
      return;
    } else {
      setCurrentGuess((oldGuess => oldGuess + 'm'));
    }
  }


  const handleEnter = () => {
    if(currentGuess.length !== 5) {
      return;
    }
    if(guesses[4] !== null ) {
      setIsGameOver(true);
    }

    const newGuesses = [...guesses];
    newGuesses[guesses.findIndex(val => val == null)] = currentGuess;
    setGuesses(newGuesses);
    setCurrentGuess('');

    if(isCorrect) {
      setIsGameOver(true);
    }
    if(solution === currentGuess) {
      setIsCorrect(true);
    }
  }

  const handleDelete = () => {
    setCurrentGuess(currentGuess.slice(0, -1));
    return;
  }

  useEffect(() => {
    const handleType = (event) => {
      
      if(isGameOver) {
        return;
      }
  
      if(event.key === 'Enter') {
        if(currentGuess.length !== 5) {
          return;
        }

        if(guesses[4] !== null ) {
          setIsGameOver(true);
        }
        
        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex(val => val == null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess('');
        
        
        if(isCorrect) {
          setIsGameOver(true);
        }
        if(solution === currentGuess) {
          setIsCorrect(true);
        }
      }
      
      if(event.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
        return
      }

      if(currentGuess.length >= 5 ) {
        return;
      }
      
      setCurrentGuess((oldGuess) => oldGuess + event.key);
      
    }
    window.addEventListener('keydown', handleType);
    
    
    return () => window.removeEventListener('keydown', handleType);
  },[currentGuess, solution, isGameOver])
  

  useEffect(() => {    
      const fetchWord = () => {
      const randomWord = WORDS[Math.floor(Math.random() * WORDS.length - 1)]
      setSolution(randomWord);

    }
    
    fetchWord();
  }, [])
  
  
  return (
    <div >
      <Head>
        <title>Wordle</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-[#121213] min-h-screen  max-w-screen m-0 p-0'>
      <header className='flex items-center justify-between px-4 py-0 h-[63px] text-[16px] w-full text-white border-b border-[#3a3a3c] bg-[#121213] absolute'>
        <div className="left"></div>
        <div className="relative items-center justify-center logo">
          <h1 className='font-bold text-[45px] tracking-tighter cursor-pointer'>Wordle</h1>
          {isGameOver && <motion.span initial={{ y: 0 }} animate={{ y: 5 }} transition={{ type: "spring", stiffness: 500 }} className='answer'>{solution}</motion.span>}
          {isCorrect && <motion.span initial={{ y: 0 }} animate={{ y: 5 }} transition={{ type: "spring", stiffness: 500 }} className='correct-answer'>Excellent</motion.span>}
        </div>
        <div className="right"></div> 
      </header>
      
        
        <div className="flex justify-center h-screen max-w-[700px]  mx-auto my-0 flex-col ">
          
          <div className="flex flex-1 justify-center pt-[53px]">
            
          <div className="flex flex-col w-[350px] h-[420px]  mt-5">
          
            {guesses.map((guess, i) => {
              
              const isCurrentGuess = i === guesses.findIndex(val => val == null)
    
              return (
                 <Column 
                  key={i} guess={isCurrentGuess ? currentGuess : guess ?? ""} 
                  isFinal={!isCurrentGuess && guess !== null} 
                  solution={solution}
                 />
                 
              )
            })}
            
          </div>

          </div>
            <div className="flex flex-col max-w-full h-[280px]">
              <div className="flex justify-center w-full font-bold text-white text-[25px] mb-2">
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleQ}>Q</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleW}>W</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleE}>E</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleR}>R</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleT}>T</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleY}>Y</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleU}>U</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleI}>I</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleO}>O</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleP}>P</button>
              </div>
              <div className="flex justify-center w-full font-bold text-white text-[25px] mb-2">
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleA}>A</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleS}>S</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleD}>D</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleF}>F</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleG}>G</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleH}>H</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleJ}>J</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleK}>K</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleL}>L</button>
                
              </div>
              <div className="flex justify-center w-full font-bold text-white text-[25px]">
                <button className='bg-[#818384] text-center w-24 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleEnter}>Enter</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleZ}>Z</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleX}>X</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleC}>C</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleV}>V</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleB}>B</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleN}>N</button>
                <button className='bg-[#818384] text-center w-14 h-20 justify-center items-center block  mx-1 rounded-lg' onClick={handleM}>M</button>
                <button className='bg-[#818384] text-center w-24 h-20 justify-center items-center block  mx-1 rounded-lg pl-6' onClick={handleDelete}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                  </svg>
                </button>
              </div>
          </div>
        </div>
      </main>
    </div>
  )
}
