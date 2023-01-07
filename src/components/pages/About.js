import React from "react";

const styles = {
  image: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#34312D",
    borderRadius: "5px"
  },
};

export default function About() {
  return (
    <div className="d-flex flex-wrap row mx-2">
      <div className="d-flex justify-content-center col-md-2 my-2">
        <img
          src="https://i.imgur.com/J8S4MJl.jpg"
          alt="headshot"
          width="150px"
          style={styles.image}
        />
      </div>

      <div className="d-flex flex-col flex-wrap justify-content-center align-items-center col-md-8 text-center my-2">
        <h2>About Me</h2>

        <p>
          I'm a web developer and musician. I will be graduating from the
          University of Utah Full-Stack Web Development bootcamp in January
          2023. I am especially interested in backend development and would like
          to expand to programming desktop apps in the future.
        </p>
      </div>
    </div>
  );
}