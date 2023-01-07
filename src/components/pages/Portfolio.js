import React from "react";
import Project from "../Project.js";


const quickFlix = {
  title: "QuickFlix",
  text: "A simple website to randomly select a movie for you.",
  image: "https://i.imgur.com/YIz9cU3.jpg",
  link: "https://mich-hales.github.io/QuickFlix/",
  github: "https://github.com/mich-hales/QuickFlix",
};

const dndMeetups = {
  title: "DnD Meetups",
  text: "A social media platform of sorts for Dungeons and Dragons players.",
  image: "https://i.imgur.com/E3ycdtx.jpg",
  link: "https://frozen-meadow-34344.herokuapp.com/",
  github: "https://github.com/DandDMeetups/DnDMeetups",
};

const techBlog = {
  title: "Tech Blog",
  text: "A mockup of a blog website.",
  image: "https://i.imgur.com/3z5ZtkE.jpg",
  github: "https://github.com/nookworth/tech-blog",
};

const employeeTracker = {
  title: "Employee Tracker",
  text: "A command-line interface allowing you to manage a database of employees.",
  image: "https://i.imgur.com/UpkADtB.jpg",
  link: "https://drive.google.com/file/d/1BxXWgkpgagZFGTS8Ze1vS0Tx0YEcxhOh/view",
  github: "https://github.com/nookworth/employee-tracker",
};

const socialApi = {
  title: "Social Network API",
  text: "Routes and data models for a hypothetical social network.",
  image: "https://i.imgur.com/4k76hhB.jpg",
  link: "https://watch.screencastify.com/v/Bhqa1VF7p508EZHdYWhb",
  github: "https://github.com/nookworth/social-network-api",
};

const eCommerce = {
  title: "E-commerce Backend",
  text: "A functional backend, including routes and database models.",
  image: "https://i.imgur.com/viJszrB.jpg",
  link: "https://drive.google.com/file/d/1gFjjX9-vBiM0ZEB6FBLv1t4LnjpKy-tw/view",
  github: "https://github.com/nookworth/e-commerce-back-end",
};

const styles = {
  quickFlix: {
    backgroundImage: "https://i.imgur.com/nQ5y4Fq.jpg",
  },

  project: {
    background: "#F1E3D3",
  },

  text: {
    text: "#F3F3F4", 
  },
};

export default function Portfolio() {
  return (
    <div className="row mx-3 text-center">
      <h2>My Work</h2>
      <Project
        title={quickFlix.title}
        text={quickFlix.text}
        image={quickFlix.image}
        link={quickFlix.link}
        github={quickFlix.github}
      />
      <Project
        title={dndMeetups.title}
        text={dndMeetups.text}
        image={dndMeetups.image}
        link={dndMeetups.link}
        github={dndMeetups.github}
      />
      <Project
        title={techBlog.title}
        text={techBlog.text}
        image={techBlog.image}
        github={techBlog.github}
      />
      <Project
        title={employeeTracker.title}
        text={employeeTracker.text}
        image={employeeTracker.image}
        link={employeeTracker.link}
        github={employeeTracker.github}
      />
      <Project
        title={socialApi.title}
        text={socialApi.text}
        image={socialApi.image}
        link={socialApi.link}
        github={socialApi.github}
      />
      <Project
        title={eCommerce.title}
        text={eCommerce.text}
        image={eCommerce.image}
        link={eCommerce.link}
        github={eCommerce.github}
      />
    </div>
  );
}
