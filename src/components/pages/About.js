import { useState } from 'react'
import { AboutModal } from '../AboutModal'
import Portfolio from './Portfolio'
import './about.css'

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // TODO: fix Portfolio page, fix Resume page, take better screenshots for project gallery

  return (
    <>
      {isModalOpen && <AboutModal onClose={closeModal} />}
      <div className='relative'>
        <div className='grid grid-rows-4 mt-2 space-y-2 about-grid'>
          <section className='flex flex-row items-center gap-2 px-2 max-h-[300px] row-span-1 relative group/bio headshot-bio'>
            <img
              src='https://i.imgur.com/G3gqAWn.jpg'
              className='pro-headshot h-[300px]'
              alt='pro-headshot'
            />
            <div
              className='text-sm lg:text-xl mx-auto text-center space-y-4 cursor-pointer about-info'
              onClick={() => {
                setIsModalOpen(true)
              }}
            >
              <h2 className='text-2xl lg:text-3xl text-charcoal group-hover/bio:hidden'>
                Christopher Morrison<br></br>Software Engineer
              </h2>
              <p className='hidden text-charcoal group-hover/bio:block'>
                I am a frontend software engineer with full-stack aspirations.
                My background in music has strengthened my self-teaching muscle
                and I continue to exercise it in the programming world. I am
                skilled in JavaScript, HTML, CSS, TailwindCSS, React, Electron,
                Node, and Elixir, and I am always interested in learning new
                technologies.
              </p>
              <h1 className='hidden text-charcoal group-hover/bio:block'>
                <em>click for detailed factsheet</em>
              </h1>
            </div>
          </section>
          <section className='flex flex-col items-center row-span-1 max-h-[300px] p-2 lg:flex-row lg:justify-between bg-eggplant w-full'>
            <header className='text-manila text-center text-2xl my-auto lg:hidden'>
              Project Highlight: HexType
            </header>
            <header className='text-manila text-center mx-auto hidden justify-self-center lg:block lg:text-3xl'>
              Project Highlight:<br></br>HexType
            </header>
            <video
              className='rounded-md max-h-4/5 lg:max-h-full xl:max-h-[450]'
              controls
              src='https://i.imgur.com/JUIXKYy.mp4'
              // width='750'
            ></video>
          </section>
          <section className='bg-manila flex flex-col lg:flex-row justify-center row-span-2 max-h-[450px] p-2 text-charcoal lg:justify-between'>
            <header className='text-center text-2xl m-auto lg:hidden'>
              Project Showcase
            </header>
            <div className='h-4/5 my-auto md:hidden'>
              <Portfolio layout='grid' size='small' />
            </div>
            <div className='h-4/5 hidden my-auto max-w-[1024px] md:block lg:w-4/5'>
              <Portfolio layout='gallery' />
            </div>
            <header className='m-auto text-xl hidden lg:block lg:text-3xl'>
              Project Showcase
            </header>
          </section>
        </div>
      </div>
    </>
  )
}
