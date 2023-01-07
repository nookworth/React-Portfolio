import React from "react";
// import { Github } from "@icons-pack/react-simple-icons";

const styles = {
  body: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#34312D",
    borderRadius: "5px",
    background: "#F3F3F4",
  },

  text: {
    text: "#F3F3F4",
  },

  button: {
    background: "#34312D",
    color: "#F3F3F4",
  },

  title: {
    color: "#34312D",
    textDecorationLine: "underline",
  },
};

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

export default function Project({ title, text, image, link, github }) {

  function onMouseEnter(e) {
    e.target.style.boxShadow = "2px 2px 2px #34312D";
  }

  function onMouseLeave(e) {
    e.target.style.boxShadow = "";
  }

  return (
    <div className="card col-sm-4 flex-sm-grow-1 m-2" style={styles.body}>
      <p className="card-title" style={styles.title}>
        {title}
      </p>
      <a href={link} target="_blank">
        <img
          src={image}
          className="card-img-top"
          alt="..."
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        ></img>
      </a>
      <div className="card-body">
        <p className="card-text">{text}</p>
        <a href={github} className="btn" style={styles.button}>
          {/* <Github /> */}
          Github
        </a>
      </div>
    </div>
  );
}
