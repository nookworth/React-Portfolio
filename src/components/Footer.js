import React from "react";
// import {
//   Github,
//   Linkedin,
//   Stackoverflow,
// } from "@icons-pack/react-simple-icons";

const styles = {
  footer: {
    background: "#34312D",
    color: "#F1E3D3",
  },
};

export default function Footer() {
  return (
    <div className="d-flex justify-content-end fixed-bottom" style={styles.footer}>
      <a href="https://github.com/nookworth" style={styles.footer}>
        {/* <Github className="m-2" title="Github" size={24} /> */}
        Github
      </a>

      <a
        href="https://www.linkedin.com/in/chris-morrison-9a185a22/"
        style={styles.footer}
      >
        {/* <Linkedin className="m-2" /> */}
        LinkedIn
      </a>

      <a
        href="https://stackoverflow.com/users/19518053/nookworth"
        style={styles.footer}
      >
        {/* <Stackoverflow className="m-2" /> */}
        StackOverflow
      </a>
    </div>
  );
}
