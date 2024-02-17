import React from 'react'
import { SiGithub } from "@icons-pack/react-simple-icons";
import './project.css'

const styles = {
  body: {
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#34312D',
    borderRadius: '5px',
    background: '#F3F3F4',
  },

  text: {
    text: '#F3F3F4',
  },

  button: {
    background: '#34312D',
    color: '#F3F3F4',
  },

  title: {
    color: '#34312D',
    textDecorationLine: 'underline',
  },
}

export default function Project({
  title,
  text,
  image,
  layout,
  link,
  github,
  size,
  subtitle,
}) {
  function onMouseEnter(e) {
    e.target.style.boxShadow = '2px 2px 2px #34312D'
  }

  function onMouseLeave(e) {
    e.target.style.boxShadow = ''
  }

  // TODO: based on 'layout' prop, render either just a background image or a card with text
  if(layout === 'gallery') return (
    <div
      className='overflow-hidden h-full w-full flex flex-col card-body'
    >
      <a
        className='h-full hover:shadow-lg'
        href={link}
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={image}
          className='hover:opacity-40 h-full w-full'
          alt='...'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        ></img>
      </a>
    </div>
  )

  return (
    <div className='overflow-hidden h-full w-full flex flex-col p-2 card-body'>
      <section className='text-center'>
        <p className='card-title' style={styles.title}>
          {title}
        </p>
        <em>{subtitle}</em>
      </section>
      <section className='mx-auto'>
        <a
          className='h-full hover:shadow-lg'
          href={link}
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={image}
            className='hover:opacity-40'
            alt='...'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          ></img>
        </a>
      </section>
      {size !== 'small' && (
        <div className='card-text'>
          <ul className='text-center' id='project-card-list'>
            {text &&
              text.map((listItem, index) => <li key={index}>{listItem}</li>)}
          </ul>
        </div>
      )}
      {github && (
        <a href={github} className='btn w-50 mx-auto' style={styles.button}>
          <SiGithub className='m-2' title='Github' size={24} />
        </a>
      )}
    </div>
  )
}
