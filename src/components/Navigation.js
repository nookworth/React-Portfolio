import React from 'react'

const styles = {
  activeTab: {
    background: '#F1E3D3',
    color: '#34312D',
  },
  inactiveTab: {
    background: '#F3F3F4',
    color: '#7E7F83',
  },
  text: {
    color: '#7E7F83',
  },
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='h-10 grid grid-cols-4'>
      <div
        className="nav-item py-2 bg-papaya data-[active='true']:bg-manila-dark data-[active='true']:shadow-md data-[active='true']:opacity-100 transition-all hover:cursor-pointer hover:transition-all hover:ease-in text-base text-center text-charcoal  rounded-b-md"
        data-active={currentPage === 'About' ? 'true' : 'false'}
      >
        <a
          href='#About'
          onClick={() => handlePageChange('About')}
          className='w-full h-full'
        >
          About Me
        </a>
      </div>
      <div className="nav-item py-2 bg-papaya data-[active='true']:bg-manila-dark data-[active='true']:shadow-md data-[active='true']:opacity-100 transition-all hover:cursor-pointer hover:transition-all hover:ease-in text-base text-center text-charcoal  rounded-b-md"
        data-active={currentPage === 'Contact' ? 'true' : 'false'}>
        <a
          href='#Contact'
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </div>
      <div className="nav-item py-2 bg-papaya data-[active='true']:bg-manila-dark data-[active='true']:shadow-md data-[active='true']:opacity-100 transition-all hover:cursor-pointer hover:transition-all hover:ease-in text-base text-center text-charcoal  rounded-b-md"
        data-active={currentPage === 'Portfolio' ? 'true' : 'false'}>
        <a
          href='#Portfolio'
          onClick={() => handlePageChange('Portfolio')}
          className={
            currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
          }
        >
          Portfolio
        </a>
      </div>
      <div className="nav-item py-2 bg-papaya data-[active='true']:bg-manila-dark data-[active='true']:shadow-md data-[active='true']:opacity-100 transition-all hover:cursor-pointer hover:transition-all hover:ease-in text-base text-center text-charcoal  rounded-b-md"
        data-active={currentPage === 'Resume' ? 'true' : 'false'}>
        <a
          href='#Resume'
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default NavTabs
