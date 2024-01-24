import { useState } from 'react'
import {
  SiGithub,
  SiLinkedin,
  SiStackoverflow,
} from '@icons-pack/react-simple-icons'
import { AboutModal } from '../AboutModal'

const styles = {
  image: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#34312D',
    borderRadius: '5px',
  },
  about: {
    borderStyle: 'dotted',
    borderWidth: '1px',
    borderColor: '#34312D',
    borderRadius: '5px',
    fontFamily: 'Courier New',
  },
  footer: {
    background: '#34312D',
    color: '#F1E3D3',
  },
}

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {isModalOpen && <AboutModal onClose={closeModal} />}
      <div className='relative my-8'>
        <div className='grid grid-rows-3 md:grid-cols-6 md:grid-rows-none'>
          <div className='col-span-1 py-2 px-4' id='headshot-wrapper'>
            <img
              src='https://i.imgur.com/G3gqAWn.jpg'
              alt='pro-headshot'
              width='150px'
              style={styles.image}
            />
          </div>

          <div
            className='md:col-span-3 inline-flex flex-col m-2 text-center space-y-4 cursor-pointer'
            style={styles.about}
            onClick={() => {
              console.log('clicked', isModalOpen)
              setIsModalOpen(true)
            }}
          >
            <h2>About Me</h2>
            <p>
              I am a frontend/full-stack web developer. My background in music
              gives me a strong ability to self-teach. I have strengths in
              JavaScript, HTML, CSS, UnoCSS, React, Electron, Node, and Elixir,
              and I am currently studying Ruby in addition.
            </p>
            <h1>
              <em>click for detailed factsheet</em>
            </h1>
          </div>
          <div
            className='md:col-span-2 inline-flex flex-col justify-between my-2 text-center'
            style={styles.about}
          >
            <h2>Socials</h2>
            <div className='inline-flex justify-evenly mb-24'>
              <a
                href='https://github.com/nookworth'
                rel='noreferrer'
                target='_blank'
              >
                {' '}
                <SiGithub color='default' />
              </a>
              <a
                href='https://www.linkedin.com/in/chris-morrison-9a185a22/'
                rel='noreferrer'
                target='_blank'
              >
                <SiLinkedin color='default' />
              </a>
              <a
                href='https://stackoverflow.com/users/19518053/nookworth'
                rel='noreferrer'
                target='_blank'
              >
                <SiStackoverflow color='default' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <video
        className='m-auto rounded-md'
        controls
        src='https://i.imgur.com/JUIXKYy.mp4'
        width='750'
      ></video>
    </>
  )
}
