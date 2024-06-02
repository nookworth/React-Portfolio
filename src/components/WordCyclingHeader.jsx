import { useEffect, useRef, useState } from 'react'
import { useTypedWords } from '../hooks/useTypedWords'
import './wordCyclingHeader.css'

const LETTER_INTERVAL = 75
const WORDS = ['Software Engineer', 'Leader', 'Creative', 'Problem Solver']

export const WordCyclingHeader = () => {
  const iterator = useRef(0)
  const word = useRef(WORDS[0])
  const [hasWordCompleted, setHasWordCompleted] = useState(false)
  const typeDuration = word.current.length * LETTER_INTERVAL

  useEffect(() => {
    if (hasWordCompleted) {
      const interval = setInterval(() => {
        iterator.current < WORDS.length - 1
          ? iterator.current++
          : (iterator.current = 0)
        word.current = WORDS[iterator.current]
        setHasWordCompleted(false)
        clearInterval(interval)
      }, 500)
    }
  }, [hasWordCompleted])

  const typedWord = useTypedWords({
    currentWord: word.current,
    letterInterval: LETTER_INTERVAL,
    pauseInterval: 750,
    setHasWordCompleted,
  })

  const headerRoleId = `header-role-${word.current
    .split(' ')
    .join('-')
    .toLowerCase()}`

  return (
    <>
      <h1 className='text-2xl lg:text-3xl' id='header-name'>
        Christopher Morrison,
      </h1>
      <h1 className='text-2xl lg:text-3xl' id={headerRoleId}>
        {typedWord}
        <br></br>
      </h1>
      <p className='text-base lg:text-xl' id='header-cta'>
        <em>click for detailed factsheet</em>
      </p>
    </>
  )
}
