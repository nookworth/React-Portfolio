import React from 'react'
import {
  SiGithub,
  SiLinkedin,
  SiStackoverflow,
  SiImgur,
} from '@icons-pack/react-simple-icons'

const styles = {
  footer: {
    background: '#34312D',
    color: '#F1E3D3',
  },
}

export default function Footer() {
  return (
    <div
      className='bg-charcoal flex flex-row justify-center gap-2 md:justify-end md:gap-4 sticky bottom-0'
      style={styles.footer}
    >
      <a
        href='https://github.com/nookworth'
        className='mx-2'
        style={styles.footer}
      >
        <SiGithub className='m-2' title='Github' size={24} />
      </a>
      <a
        href='https://www.linkedin.com/in/chris-morrison-9a185a22/'
        className='mx-2'
        style={styles.footer}
      >
        <SiLinkedin className='m-2' />
      </a>
      <a
        href='https://stackoverflow.com/users/19518053/nookworth'
        className='mx-2'
        style={styles.footer}
      >
        <SiStackoverflow className='m-2' />
      </a>
      <a
        href='https://imgur.com/a/e2lyLg3'
        className='mx-2'
        style={styles.footer}
      >
        <SiImgur className='m-2' title='Github' size={24} />
      </a>
    </div>
  )
}
