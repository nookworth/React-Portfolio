import React from 'react'
import Project from '../Project.js'
import {
  SiAwsamplify,
  SiElectron,
  SiGithubpages,
  SiGoogledrive,
  SiHeroku,
  SiScreencastify,
} from '@icons-pack/react-simple-icons'

const tapp = {
  title: 'HexType',
  text: ['✅ Solo Developer', '🛠️ JavaScript, Electron, HTML5, CSS3'],
  icon: 'SiElectron',
  image: 'https://i.imgur.com/XhtQLZi.png',
  link: 'https://imgur.com/a/e2lyLg3',
  github: '',
  subtitle: 'Speech-to-text transcribing app for desktop users.',
}

const quickFlix = {
  title: 'QuickFlix',
  text: ['✅ Scripting and API implementation', '🛠️ JavaScript, REST'],
  icon: 'SiGithubpages',
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
  icon: 'SiHeroku',
  image: 'https://i.imgur.com/oLnEked.png',
  link: 'https://frozen-meadow-34344.herokuapp.com/',
  github: 'https://github.com/DandDMeetups/DnDMeetups',
  subtitle: 'A social media platform for Dungeons and Dragons players.',
}

const countryFactbook = {
  title: 'Country Factbook',
  text: ['✅ Solo Developer', '🛠️ React, TypeScript, Apollo GraphQL'],
  icon: 'SiAwsamplify',
  image: 'https://i.imgur.com/YkYMfPA.png',
  link: 'https://main.d2638hq58c2so8.amplifyapp.com/',
  github: 'https://github.com/nookworth/countries-challenge-v2',
  subtitle: 'Search for statistics about any country in the world.',
}

const employeeTracker = {
  title: 'Employee Tracker',
  text: ['✅ Solo Developer', '🛠️ Inquirer, Express, MySQL'],
  icon: 'SiGoogledrive',
  image: 'https://i.imgur.com/UpkADtB.jpg',
  link: 'https://drive.google.com/file/d/1BxXWgkpgagZFGTS8Ze1vS0Tx0YEcxhOh/view',
  github: 'https://github.com/nookworth/employee-tracker',
  subtitle:
    'A command-line interface allowing you to manage a database of employees.',
}

const socialApi = {
  title: 'Social Network API',
  text: ['✅ Solo Developer', '🛠️ Express, Mongoose, Bcrypt'],
  icon: 'SiScreencastify',
  image: 'https://i.imgur.com/4k76hhB.jpg',
  link: 'https://watch.screencastify.com/v/Bhqa1VF7p508EZHdYWhb',
  github: 'https://github.com/nookworth/social-network-api',
  subtitle: 'Routes and data models for a hypothetical social network.',
}

const allProjects = [
  tapp,
  quickFlix,
  dndMeetups,
  countryFactbook,
  employeeTracker,
  socialApi,
]
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
  if (!layout) return <></>
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

  if (layout === 'grid') {
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

  if (layout === 'simpleGallery') {
    return (
      <div className='flex flex-row gap-3 md:h-[300px] md:w-[533px] lg:h-[400px] lg:w-[933px] p-1.5'>
        <section className='grid grid-cols-5 grid-rows-2 gap-3 h-full w-1/2'>
          {topThreeProjects.map(
            ({ title, text, icon, image, link, github, subtitle }, index) => (
              <div
                key={index}
                className={`bg-papaya rounded-md text-onyx first:bg-eggplant first:order-3 first:col-start-3 first:col-span-3 first:row-start-1 first:row-span-2 first:text-manila even:col-span-2 last:col-span-2 group`}
              >
                <div
                  className={`h-min w-min m-auto py-1/3 group-hover/:hidden`}
                >
                  {iconComponent(icon)}
                </div>
                <div className='hidden text-center space-y-4 md:py-6 md:group-first:py-20 group-hover:block'>
                  <a
                    href={link}
                    className='underline'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {title}
                  </a>
                  <p>
                    <em>{subtitle}</em>
                  </p>
                </div>
              </div>
            )
          )}
        </section>
        <section className='grid grid-cols-2 grid-rows-2 gap-3 h-full w-1/2'>
          {otherThree?.map(
            ({ title, text, icon, image, link, github, subtitle }, index) => (
              <div
                key={index}
                className='bg-onyx rounded-md text-manila first:bg-papaya first:col-span-2 first:text-onyx group'
              >
                <div className='h-min w-min m-auto py-1/3 group-hover:hidden'>
                  {iconComponent(icon)}
                </div>
                <div className='hidden text-center space-y-4 md:py-6 group-hover:block'>
                  <a
                    href={link}
                    className='underline'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {title}
                  </a>
                  <p>
                    <em>{subtitle}</em>
                  </p>
                </div>
              </div>
            )
          )}
        </section>
      </div>
    )
  }
}

const iconComponent = iconName => {
  switch (iconName) {
    case 'SiAwsamplify': {
      return <SiAwsamplify className='text-onyx' size={32} />
    }
    case 'SiElectron': {
      return <SiElectron className='text-manila' size={32} />
    }
    case 'SiGithubpages': {
      return <SiGithubpages className='text-onyx' size={32} />
    }
    case 'SiGoogledrive': {
      return <SiGoogledrive className='text-manila' size={32} />
    }
    case 'SiHeroku': {
      return <SiHeroku className='text-onyx' size={32} />
    }
    case 'SiScreencastify': {
      return <SiScreencastify className='text-manila' size={32} />
    }
    default:
      return <></>
  }
}
