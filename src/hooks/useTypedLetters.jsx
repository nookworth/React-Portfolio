import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const education = [
  ['University of Utah', 'Certificate, Full-stack Web Development'],
  ['Brigham Young University', 'MM, Piano Performance'],
  ['Brigham Young University', 'BM, Piano Performance'],
]
const experience = [
  ['Travelpass Group', 'Engineering Intern'],
  ['Utah Valley University', 'TypeWell Transcriber'],
  ['Morrison Piano Studio', 'Owner/Teacher'],
]
const interests = [
  'Self-teaching',
  'Self-driven projects',
  'Learning programming languages',
  'Web fundamentals',
]
const hobbies = [
  'Music composition',
  'Piano',
  'Tabletop role-playing games',
  'Nonfiction',
  'Video games',
]

export const useTypedLetters = ({ format, data }) => {
  const [currentItem, setCurrentItem] = useState('')
  const [hasItemFinishedTyping, setHasItemFinishedTyping] = useState(false)
  const [typedWord, setTypedWord] = useState('')
  const [wordBuilder, setWordBuilder] = useState('')
  const currentItemIndex = useRef(0)
  const iterator = useRef(0)

  useEffect(() => {
    function typeLetters() {
      if (iterator.current === currentItem.length + 1) {
        iterator.current = 0
        setWordBuilder([])
        setTypedWord('')
        currentItemIndex.current++
        return
      }
      const currentItemArr = currentItem?.split('')

      // TODO: skip spaces when typing out words
      const interval = setInterval(() => {
        setWordBuilder([...wordBuilder, currentItemArr[iterator.current]])
        setTypedWord(wordBuilder.join(''))((iterator.current += 1))
        clearInterval(interval)
      }, 75)
    }

    currentItem && typeLetters()
  }, [currentItem, wordBuilder])

  // Need logic here to decide when to render the typing letters
  // and when to render the entire term from data
  switch (format) {
    case 'basic':
      return (
        <ul>
          {data.map((listItem, index) => (
            <li>{currentItemIndex > index ? listItem : currentItem}</li>
          ))}
        </ul>
      )
    case 'bioItem':
      return (
        <ul>
          {data.map(listItem => (
            <>
              <li>{listItem[0]}</li>
              <li className='ml-8 italic'>{listItem[1]}</li>
            </>
          ))}
        </ul>
      )
    default:
      return (
        <ul>
          {data.map(listItem => (
            <li>{listItem}</li>
          ))}
        </ul>
      )
  }
}
