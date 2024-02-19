import React from 'react'
import Project from '../Project.js'

const tapp = {
  title: 'Transcribing App',
  text: ['✅ Solo Developer', '🛠️ JavaScript, Electron, HTML5, CSS3'],
  image: 'https://i.imgur.com/XhtQLZi.png',
  link: 'https://imgur.com/a/e2lyLg3',
  github: '',
  subtitle: 'Speech-to-text desktop app',
}

const quickFlix = {
  title: 'QuickFlix',
  text: ['✅ Scripting and API implementation', '🛠️ JavaScript, REST'],
  image: 'https://i.imgur.com/WXzyLqp.png',
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
  image: 'https://i.imgur.com/oLnEked.png',
  link: 'https://frozen-meadow-34344.herokuapp.com/',
  github: 'https://github.com/DandDMeetups/DnDMeetups',
  subtitle: 'A social media platform for Dungeons and Dragons players.',
}

const countryFactbook = {
  title: 'Country Factbook',
  text: ['✅ Solo Developer', '🛠️ React, TypeScript, Apollo GraphQL'],
  image: 'https://i.imgur.com/YkYMfPA.png',
  link: 'https://main.d2638hq58c2so8.amplifyapp.com/',
  github: 'https://github.com/nookworth/countries-challenge-v2',
  subtitle: 'Search for statistics about any country in the world.',
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

const allProjects = [tapp, quickFlix, dndMeetups, countryFactbook, employeeTracker, socialApi]
const topThreeProjects = [tapp, quickFlix, dndMeetups]
const otherThree = [countryFactbook, employeeTracker, socialApi]

// const eCommerce = {
//   title: "E-commerce Backend",
//   text: ["A functional backend, including routes and database models."],
//   image: "https://i.imgur.com/viJszrB.jpg",
//   link: "https://drive.google.com/file/d/1gFjjX9-vBiM0ZEB6FBLv1t4LnjpKy-tw/view",
//   github: "https://github.com/nookworth/e-commerce-back-end",
// };

// TODO: allow this to take a 'layout' prop to determine whether to display a gallery or a card grid
export default function Portfolio({ layout = 'grid', size = 'large' }) {
  if (layout === 'gallery') {
    return (
      <div className='flex flex-row gap-3 h-full p-1.5'>
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
                  layout={layout}
                  link={link}
                  github={github}
                  size={size}
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
                  layout={layout}
                  link={link}
                  github={github}
                  size={size}
                  subtitle={subtitle}
                />
              </div>
            )
          )}
        </section>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-2 grid-rows-3 gap-4 p-4 md:grid-cols-3 md:grid-rows-2'>
      {allProjects.map(
        ({ title, text, image, link, github, subtitle }, index) => (
          <div key={index}>
            <Project
              title={title}
              text={text}
              image={image}
              layout={layout}
              link={link}
              github={github}
              size={size}
              subtitle={subtitle}
            />
          </div>
        )
      )}
    </div>
  )
}
