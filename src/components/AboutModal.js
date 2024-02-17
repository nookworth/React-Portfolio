const fullName = 'Christopher H. Morrison'
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

export const AboutModal = ({ onClose }) => {
  return (
    <div
      className='bg-manila-dark fixed bottom-0 w-full md:w-2/3 text-white rounded-lg shadow-lg space-y-4 px-4 overflow-scroll overscroll-contain'
      id='about-modal'
    >
      <section className='flex flex-row justify-center'>
        <h2 className='mt-4 text-xl md:text-3xl underline'>Developer Factsheet</h2>
        <button
          className='absolute right-2 top-1 hover:underline'
          onClick={() => onClose()}
        >
          Close
        </button>
      </section>
      <section className='grid grid-cols-2 space-y-2'>
        <h3 className='text-base md:text-xl'>Name: </h3>
        <p data-section='0'>{fullName}</p>
        <hr></hr>
        <hr></hr>
        <h3 className='text-base md:text-xl'>Education: </h3>
        <ul className='flex flex-col' data-section='1'>
          <li>University of Utah</li>
          <li className='ml-8 italic'>
            Certificate, Full-stack Web Development
          </li>
          <li>Brigham Young University</li>
          <li className='ml-8 italic'>MM, Piano Performance</li>
          <li>Brigham Young University</li>
          <li className='ml-8 italic'>BM, Piano Performance</li>
        </ul>
        <hr></hr>
        <hr></hr>
        <h3 className='text-base md:text-xl'>Experience: </h3>
        <ul className='flex flex-col' data-section='2'>
          <li>Travelpass Group</li>
          <li className='ml-8 italic'>Engineering Intern</li>
          <li>Utah Valley University</li>
          <li className='ml-8 italic'>TypeWell Transcriber</li>
          <li>Morrison Piano Studio</li>
          <li className='ml-8 italic'>Owner/Teacher</li>
        </ul>
        <hr></hr>
        <hr></hr>
        <h3 className='text-base md:text-xl'>Professional Interests: </h3>
        <ul>
          <li>Self-teaching</li>
          <li>Self-driven projects</li>
          <li>Learning new programming languages</li>
          <li>Web fundamentals</li>
        </ul>
        <hr></hr>
        <hr></hr>
        <h3 className='text-base md:text-xl'>Hobbies: </h3>
        <ul>
          <li>Music composition</li>
          <li>Piano</li>
          <li>Tabletop role-playing games</li>
          <li>Nonfiction</li>
          <li>Video games</li>
        </ul>
      </section>
    </div>
  )
}
