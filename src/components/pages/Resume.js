import React from "react";

const styles = {
  list: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#34312D",
    borderRadius: "5px",
    background: "#F3F3F4",
  },
  listItem: {
    background: "#F3F3F4",
    borderStyle: "dotted",
    borderColor: "#34312D",
  },
  link: {
    color: "#34312D",
  },
  image: {
    borderStyle: "dotted",
    borderWidth: "1px",
    borderColor: "#34312D",
    borderRadius: "5px",
    maxWidth: "100%",
  },
};

export default function Resume() {
  function onMouseEnter(e) {
    e.target.style.boxShadow = "1px 1px 1px #34312D";
  }

  function onMouseLeave(e) {
    e.target.style.boxShadow = "";
  }

  return (
    <div className="text-center d-flex flex-column align-items-middle">
      <div>
        <h2>Resume and Skills</h2>
      </div>

      <div className="container row d-flex flex-row flex-wrap justify-content-center mx-2">
        <div
          className="col-sm py-3 px-md-5 m-2 flex-md-grow-1"
          style={styles.list}
        >
          <h3>✨ Skills ✨</h3>
          <ul className="list-group">
            <li className="list-group-item" style={styles.listItem}>
              JavaScript ES6+
            </li>
            <li className="list-group-item" style={styles.listItem}>
              CSS3
            </li>
            <li className="list-group-item" style={styles.listItem}>
              HTML5
            </li>
            <li className="list-group-item" style={styles.listItem}>
              SQL
            </li>
            <li className="list-group-item" style={styles.listItem}>
              NoSQL
            </li>
            <li className="list-group-item" style={styles.listItem}>
              GitHub
            </li>
            <li className="list-group-item" style={styles.listItem}>
              MongoDB
            </li>
            <li className="list-group-item" style={styles.listItem}>
              MySQL
            </li>
            <li className="list-group-item" style={styles.listItem}>
              Express
            </li>
            <li className="list-group-item" style={styles.listItem}>
              React
            </li>
            <li className="list-group-item" style={styles.listItem}>
              Node
            </li>
            <li className="list-group-item" style={styles.listItem}>
              Handlebars
            </li>
            <li className="list-group-item" style={styles.listItem}>
              jQuery
            </li>
            <li className="list-group-item" style={styles.listItem}>
              Bootstrap
            </li>
            <li className="list-group-item" style={styles.listItem}>
              Tailwind
            </li>
          </ul>
        </div>
        <div
          className="col-sm py-3 px-md-5 m-2 flex-md-grow-1"
          style={styles.list}
        >
          <h3>📜 Resume 📜</h3>
          <a
            className="my-5 flex-shrink-1"
            href="https://docs.google.com/document/d/1KO9zwd_FVnY-rfrOgWMKi0uNbsyP7JqsMc2SlrTXFwY/edit?usp=sharing"
            style={styles.link}
          >
            <img
              src="https://i.imgur.com/oXUa80F.jpg"
              alt="resume"
              style={styles.image}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              data-toggle="tooltip"
              data-placement="top"
              title="Download/view resume"
              className="flex-shrink-1"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
