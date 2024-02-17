import React from 'react'
// import { Github } from "@icons-pack/react-simple-icons";
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

// export default function Project({ title, text, image, link, github }) {
//   return (
//     <div className="py-3 px-md-5 col-sm-4 flex-sm-grow-1 m-2" style={styles.body}>
//       <div className="card-body">
//         <a href={link} className="card-title" style={styles.title}>
//           {title}
//         </a>
//         <p className="card-text">{text}</p>
//         <a href={github} className="btn" style={styles.button}>
//           <Github />
//         </a>
//         {/* <img src={image} className="img-fluid"></img> */}
//       </div>
//     </div>
//   );
// }

export default function Project({
  title,
  text,
  image,
  link,
  github,
  subtitle,
}) {
  function onMouseEnter(e) {
    e.target.style.boxShadow = '2px 2px 2px #34312D'
  }

  function onMouseLeave(e) {
    e.target.style.boxShadow = ''
  }

  // TODO: refactor using TailwindCSS
  return (
    <div
      className='overflow-hidden h-full w-full flex flex-col card-body'
      // style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
    >
      {/* <p className='card-title' style={styles.title}>
        {title}
      </p>
      <em>{subtitle}</em> */}
      <a className='h-full hover:shadow-lg' href={link} target='_blank' rel='noreferrer'>
        <img
          src={image}
          className='hover:opacity-40 h-full'
          alt='...'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        ></img>
      </a>
      {/* <div className='card-text'>
        <ul className='text-center' id='project-card-list'>
          {text &&
            text.map((listItem, index) => <li key={index}>{listItem}</li>)}
        </ul>
      </div>
      {github && (
        <a href={github} className='btn w-50 mx-auto' style={styles.button}>
          Github
        </a>
      )} */}
    </div>
  )
}
