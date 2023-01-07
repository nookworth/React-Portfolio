import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const styles = {
  field: {
    background: "#F3F3F4",
  },
  button: {
    background: "#34312D",
    color: "#F1E3D3",
  },
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [clicked, setClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }

    setErrorMessage("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Invalid email address");
      return;
    }
  };

  const handleClick = (e) => {

    setClicked(true);

    };

  // const handleMouse = (e) => {
  //   const { target } = e;
  //   const inputValue = target.value;

  //   setErrorMessage("This field is required.");

  // };

  return (
    <div className="text-center d-flex flex-column align-items-center">
      <h2>Contact Me</h2>
      <div className="container row justify-content-center">
        <form className="form-group">
          <input
            className="form-control my-2"
            value={name}
            name="name"
            onChange={handleInputChange}
            // onClick={handleClick}
            // onMouseLeave={inputText ? setInputText("") : setErrorMessage("This field is required")}
            type="text"
            placeholder="Please enter your name"
            style={styles.field}
          ></input>
          <input
            className="form-control my-2"
            value={email}
            name="email"
            onChange={handleInputChange}
            onClick={handleClick}
            // onMouseLeave={clicked ? handleMouse : setClicked(false)}
            type="email"
            placeholder="Please enter your email address"
            style={styles.field}
          ></input>
          <textarea
            className="form-control my-2"
            value={message}
            name="message"
            onChange={handleInputChange}
            onClick={handleClick}
            // onMouseLeave={clicked ? handleMouse : setClicked(false)}
            type="text"
            placeholder="What can I help you with?"
            style={styles.field}
          ></textarea>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
      <button
        className="btn my-2 w-25 justify-self-center"
        style={styles.button}
        onClick={handleFormSubmit}
      >
        Submit
      </button>
    </div>
  );
}
