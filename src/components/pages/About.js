import { useState } from 'react'
import {
  SiGithub,
  SiLinkedin,
  SiStackoverflow,
} from '@icons-pack/react-simple-icons'
import { AboutModal } from '../AboutModal'
import './about.css'

const styles = {
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
        <div className='grid grid-rows-2 about-grid'>
          <section className='flex flex-row headshot-bio'>
            <img
              src='https://i.imgur.com/G3gqAWn.jpg'
              className='pro-headshot'
              alt='pro-headshot'
            />
            <div
              className='text-xs pt-12 md:text-sm lg:text-base text-center space-y-4 cursor-pointer about-info'
              style={styles.about}
              onClick={() => {
                setIsModalOpen(true)
              }}
            >
              <h2>About Me</h2>
              <p>
                I am a frontend/full-stack web developer. My background in music
                has strengthened my self-teaching muscle and I continue to
                exercise it in the programming world. I have strengths in
                JavaScript, HTML, CSS, TailwindCSS, React, Electron, Node, and
                Elixir, and I am currently studying Ruby in addition.
              </p>
              <h1>
                <em>click for detailed factsheet</em>
              </h1>
            </div>
          </section>
          {/* <div
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
          </div> */}
          <section className='bg-eggplant w-full'>
            <video
              className='aspect-video ml-auto rounded-md max-h-[450px]'
              controls
              src='https://i.imgur.com/JUIXKYy.mp4'
              // width='750'
            ></video>
          </section>
        </div>
      </div>
    </>
  )
}
