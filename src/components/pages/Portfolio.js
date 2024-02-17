import React from 'react'
import Project from '../Project.js'

const tapp = {
  title: 'Transcribing App',
  text: ['✅ Solo Developer', '🛠️ JavaScript, Electron, HTML5, CSS3'],
  image: 'https://i.imgur.com/25I3MFE.jpg',
  link: 'https://imgur.com/a/e2lyLg3',
  subtitle: 'Speech-to-text desktop app',
}

const quickFlix = {
  title: 'QuickFlix',
  text: ['✅ Scripting and API implementation', '🛠️ JavaScript, REST'],
  image: 'https://i.imgur.com/YIz9cU3.jpg',
  link: 'https://mich-hales.github.io/QuickFlix/',
  github: 'https://github.com/mich-hales/QuickFlix',
  subtitle: 'A website to randomly select a movie for you.',
}

const dndMeetups = {
  title: 'DnD Meetups',
  text: [
    '✅ Team lead and primary backend developer',
    '🛠️ HTML, Tailwind, Express, Sequelize',
  ],
  image: 'https://i.imgur.com/E3ycdtx.jpg',
  link: 'https://frozen-meadow-34344.herokuapp.com/',
  github: 'https://github.com/DandDMeetups/DnDMeetups',
  subtitle: 'A social media platform for Dungeons and Dragons players.',
}

const techBlog = {
  title: 'Tech Blog',
  text: [
    '✅ Solo Developer',
    '🛠️ MVC (Handlebars), Sequelize, Express, Bcrypt',
  ],
  image: 'https://i.imgur.com/3z5ZtkE.jpg',
  github: 'https://github.com/nookworth/tech-blog',
  subtitle: 'A mockup of a blog website.',
}

const employeeTracker = {
  title: 'Employee Tracker',
  text: ['✅ Solo Developer', '🛠️ Inquirer, Express, MySQL'],
  image: 'https://i.imgur.com/UpkADtB.jpg',
  link: 'https://drive.google.com/file/d/1BxXWgkpgagZFGTS8Ze1vS0Tx0YEcxhOh/view',
  github: 'https://github.com/nookworth/employee-tracker',
  subtitle:
    'A command-line interface allowing you to manage a database of employees.',
}

const socialApi = {
  title: 'Social Network API',
  text: ['✅ Solo Developer', '🛠️ Express, Mongoose, Bcrypt'],
  image: 'https://i.imgur.com/4k76hhB.jpg',
  link: 'https://watch.screencastify.com/v/Bhqa1VF7p508EZHdYWhb',
  github: 'https://github.com/nookworth/social-network-api',
  subtitle: 'Routes and data models for a hypothetical social network.',
}

const topThreeProjects = [tapp, quickFlix, dndMeetups]
const otherThree = [techBlog, employeeTracker, socialApi]

// const eCommerce = {
//   title: "E-commerce Backend",
//   text: ["A functional backend, including routes and database models."],
//   image: "https://i.imgur.com/viJszrB.jpg",
//   link: "https://drive.google.com/file/d/1gFjjX9-vBiM0ZEB6FBLv1t4LnjpKy-tw/view",
//   github: "https://github.com/nookworth/e-commerce-back-end",
// };

export default function Portfolio() {
  return (
    // <div className='portfolio-container row mx-3 text-center'>
    //   <h2>My Work</h2>
    //   <Project
    //     title={tapp.title}
    //     text={tapp.text}
    //     image={tapp.image}
    //     link={tapp.link}
    //     subtitle={tapp.subtitle}
    //   />
    //   <Project
    //     title={quickFlix.title}
    //     text={quickFlix.text}
    //     image={quickFlix.image}
    //     link={quickFlix.link}
    //     github={quickFlix.github}
    //     subtitle={quickFlix.subtitle}
    //   />
    //   <Project
    //     title={dndMeetups.title}
    //     text={dndMeetups.text}
    //     image={dndMeetups.image}
    //     link={dndMeetups.link}
    //     github={dndMeetups.github}
    //     subtitle={dndMeetups.subtitle}
    //   />
    //   <Project
    //     title={techBlog.title}
    //     text={techBlog.text}
    //     image={techBlog.image}
    //     github={techBlog.github}
    //     subtitle={techBlog.subtitle}
    //   />
    //   <Project
    //     title={employeeTracker.title}
    //     text={employeeTracker.text}
    //     image={employeeTracker.image}
    //     link={employeeTracker.link}
    //     github={employeeTracker.github}
    //     subtitle={employeeTracker.subtitle}
    //   />
    //   <Project
    //     title={socialApi.title}
    //     text={socialApi.text}
    //     image={socialApi.image}
    //     link={socialApi.link}
    //     github={socialApi.github}
    //     subtitle={socialApi.subtitle}
    //   />
    // </div>
    <div className='flex flex-row gap-3 h-116 p-1.5 max-w-full'>
      <section className='grid grid-cols-5 grid-rows-2 gap-3 max-w-1/2'>
        {topThreeProjects.map(
          ({ title, text, image, link, github, subtitle }, index) => (
            <div
              key={index}
              className='first:order-3 first:col-start-3 first:col-span-3 first:row-start-1 first:row-span-2 even:col-span-2 last:col-span-2'
            >
              <Project
                title={title}
                text={text}
                image={image}
                link={link}
                github={github}
                subtitle={subtitle}
              />
            </div>
          )
        )}
      </section>
      <section className='grid grid-cols-2 grid-rows-2 gap-3 max-w-1/2'>
        {otherThree?.map(
          ({ title, text, image, link, github, subtitle }, index) => (
            <div key={index} className='first:col-span-2'>
              <Project
                title={title}
                text={text}
                image={image}
                link={link}
                github={github}
                subtitle={subtitle}
              />
            </div>
          )
        )}
      </section>
    </div>
  )
}
