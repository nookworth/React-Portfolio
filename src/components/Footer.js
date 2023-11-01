import React from "react";
import {
  SiGithub,
  SiLinkedin,
  SiStackoverflow,
} from '@icons-pack/react-simple-icons'

const styles = {
  footer: {
    background: "#34312D",
    color: "#F1E3D3"
  },
};

export default function Footer() {
  return (
    <div className="d-flex justify-content-end fixed-bottom" style={styles.footer}>
      <a href="https://github.com/nookworth" className="mx-2" style={styles.footer}>
        <SiGithub className="m-2" title="Github" size={24} />
        Github
      </a>

      <a
        href="https://www.linkedin.com/in/chris-morrison-9a185a22/"
        className="mx-2"
        style={styles.footer}
      >
        <SiLinkedin className="m-2" />
        LinkedIn
      </a>

      <a
        href="https://stackoverflow.com/users/19518053/nookworth"
        className="mx-2"
        style={styles.footer}
      >
        <SiStackoverflow className="m-2" />
        StackOverflow
      </a>
    </div>
  );
}
