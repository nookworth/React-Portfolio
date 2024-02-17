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
    <ul className='h-10 flex flex-column md:flex-row md:justify-evenly md:items-center'>
      <li className='nav-item'>
        <a
          href='#about'
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={
            currentPage === 'About' ? styles.activeTab : styles.inactiveTab
          }
        >
          About Me
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#Contact'
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          style={
            currentPage === 'Contact' ? styles.activeTab : styles.inactiveTab
          }
        >
          Contact
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#Portfolio'
          onClick={() => handlePageChange('Portfolio')}
          className={
            currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'
          }
          style={
            currentPage === 'Portfolio' ? styles.activeTab : styles.inactiveTab
          }
        >
          Portfolio
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#Resume'
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          style={
            currentPage === 'Resume' ? styles.activeTab : styles.inactiveTab
          }
        >
          Resume
        </a>
      </li>
    </ul>
  )
}

export default NavTabs
