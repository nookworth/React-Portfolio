import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const AboutModal = ({ onClose }) => {
  return (
    <div
      className='bg-manila-dark fixed bottom-0 text-white rounded-lg shadow-lg space-y-4 px-4'
      id='about-modal'
    >
      <section className='flex flex-row justify-center'>
        <h2 className='mt-4 text-3xl underline'>Developer Factsheet</h2>
        <button
          className='absolute right-2 top-1 hover:underline'
          onClick={() => onClose()}
        >
          Close
        </button>
      </section>
      <section className='grid grid-cols-2 space-y-2'>
        <h3 className='text-xl'>Name: </h3>
        <p>Christopher H. Morrison</p>
        <hr></hr>
        <hr></hr>
        <h3 className='text-xl'>Education: </h3>
        <div className='flex flex-col'>
          <p>University of Utah</p>
          <p className='ml-8 italic'>Certificate, Full-stack Web Development</p>
          <p>Brigham Young University</p>
          <p className='ml-8 italic'>MM, Piano Performance</p>
          <p>Brigham Young University</p>
          <p className='ml-8 italic'>BM, Piano Performance</p>
        </div>
        <hr></hr>
        <hr></hr>
        <h3 className='text-xl'>Experience: </h3>
        <div className='flex flex-col'>
          <p>Travelpass Group</p>
          <p className='ml-8 italic'>Engineering Intern</p>
          <p>Utah Valley University</p>
          <p className='ml-8 italic'>TypeWell Transcriber</p>
          <p>Morrison Piano Studio</p>
          <p className='ml-8 italic'>Owner/Teacher</p>
        </div>
        <hr></hr>
        <hr></hr>
        <h3 className='text-xl'>Professional Interests: </h3>
        <div className='flex flex-col'>
          <p>Self-teaching</p>
          <p>Self-driven projects</p>
          <p>Learning new programming languages</p>
          <p>Web fundamentals</p>
        </div>
        <hr></hr>
        <hr></hr>
        <h3 className='text-xl'>Hobbies: </h3>
        <div className='flex flex-col'>
          <p>Music composition and piano</p>
          <p>Tabletop role-playing games</p>
          <p>Reading nonfiction</p>
          <p>Video games</p>
        </div>
      </section>
    </div>
  )
}
