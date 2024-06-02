import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const useTypedWords = ({
  currentWord,
  letterInterval,
  pauseInterval,
  setHasWordCompleted,
}) => {
  const [displayWord, setDisplayWord] = useState('')
  const [hasCurrentWordBeenRendered, setHasCurrentWordBeenRendered] =
    useState(false)
  const [wordBuilder, setWordBuilder] = useState([])
  const iterator = useRef(0)

  async function pause(pause) {
    if (pause) {
      return new Promise(res => {
        const timeout = setTimeout(() => {
          res(clearTimeout(timeout))
        }, pauseInterval)
      })
    } else return
  }

  useEffect(() => {
    function typeLetters() {
      const searchTermArr = currentWord.split('')

      if (iterator.current === currentWord.length * 2 + 1) {
        iterator.current = 0
        setWordBuilder([])
        setDisplayWord('')
        setHasCurrentWordBeenRendered(true)
        setHasWordCompleted(true)
        return
      }

      if (iterator.current < currentWord.length) {
        forwardInterval()
      }

      if (iterator.current >= currentWord.length) {
        pause(iterator.current === currentWord.length + 1).then(() =>
          reverseInterval()
        )
      }

      function forwardInterval() {
        const fInterval = setInterval(() => {
          setWordBuilder([...wordBuilder, searchTermArr[iterator.current]]),
            setDisplayWord(wordBuilder.join('')),
            (iterator.current += 1),
            clearInterval(fInterval)
        }, letterInterval)
      }

      function reverseInterval() {
        const rInterval = setInterval(() => {
          setWordBuilder(wb => {
            return wb.length > 0 ? wb.slice(0, wb.length - 1) : [...wb]
          })
          setDisplayWord(wordBuilder.join('')),
            (iterator.current += 1),
            clearInterval(rInterval)
        }, letterInterval)
      }
    }

    currentWord && !hasCurrentWordBeenRendered && typeLetters()
  }, [hasCurrentWordBeenRendered, displayWord, currentWord, wordBuilder])

  useLayoutEffect(() => {
    setHasCurrentWordBeenRendered(false)
  }, [currentWord])

  return displayWord
}
