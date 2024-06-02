import { useState } from 'react'
import { AboutModal } from '../AboutModal'
import Portfolio from './Portfolio'
import './about.css'

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {isModalOpen && <AboutModal onClose={closeModal} />}
      <div className='relative'>
        <div className=' mt-2 about-grid md:grid md:grid-rows-4'>
          <section className='flex flex-row items-center gap-2 px-2 mb-2 max-h-[300px] row-span-1 relative group/bio headshot-bio'>
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
              <h2 className='text-2xl lg:text-3xl text-charcoal'>
                Christopher Morrison<br></br>Software Engineer<br></br>
                <p className='text-base lg:text-xl'>
                  <em>click for detailed factsheet</em>
                </p>
              </h2>
              <p className='hidden text-charcoal'>
                I am a frontend software engineer with full-stack aspirations.
                My background in music has strengthened my self-teaching muscle
                and I continue to exercise it in the programming world. I am
                skilled in JavaScript, HTML, CSS, TailwindCSS, React, Electron,
                Node, and Elixir, and I am always interested in learning new
                technologies.
              </p>
              <h1 className='hidden text-charcoal'>
                <em>click for detailed factsheet</em>
              </h1>
            </div>
          </section>
          <section className='flex flex-col items-center row-span-1 px-2 py-4 space-y-2 bg-eggplant w-full md:max-h-[300px] lg:flex-row lg:justify-between'>
            <header className='text-manila text-center text-2xl my-auto grow lg:hidden'>
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
          <section className='bg-manila h-full flex flex-col justify-center p-2 w-full text-charcoal md:flex-row md:justify-between md:row-span-2'>
            <header className='text-center text-2xl m-auto md:hidden'>
              Portfolio
            </header>
            <div className='h-4/5 my-auto md:hidden'>
              <Portfolio layout='grid' size='small' />
            </div>
            <div className='hidden my-auto md:block'>
              <Portfolio layout='simpleGallery' />
            </div>
            <header className='m-auto text-xl hidden md:block md:text-3xl'>
              Portfolio
            </header>
          </section>
        </div>
      </div>
    </>
  )
}
