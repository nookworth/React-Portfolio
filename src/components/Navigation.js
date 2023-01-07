import React from "react";

const styles = {
  activeTab: {
    background: "#F1E3D3",
    color: "#34312D",
  },
  inactiveTab: {
    background: "#F3F3F4",
    color: "#7E7F83"
  },
  text: {
    color: "#7E7F83",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="container d-flex flex-row justify-content-between align-items-center">
    <ul className="nav nav-tabs d-flex flex-column flex-sm-row">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
          style={currentPage === "About" ? styles.activeTab : styles.inactiveTab}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          style={currentPage === "Contact" ? styles.activeTab : styles.inactiveTab}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
          style={currentPage === "Portfolio" ? styles.activeTab : styles.inactiveTab}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          style={currentPage === "Resume" ? styles.activeTab : styles.inactiveTab}
        >
          Resume
        </a>
      </li>
    </ul>
    {/* <ul className="d-block d-sm-none nav nav-tabs">
      <li className="nav-item dropdown">
      
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href={currentPage} role="button" aria-expanded="false">Dropdown</a>

        <div className="dropdown-menu">
          <a className="dropdown-item" href="#About">About Me</a>
          <a className="dropdown-item" href="#Contact">Contact</a>
          <a className="dropdown-item" href="#Portfolio">Portfolio</a>
          <a className="dropdown-item" href="#Resume">Resume</a>
        </div>
        
        </li>    
      </ul>     */}
    <div className="d-none d-md-block" style={styles.text}>Christopher Morrison's Portfolio</div>
    </div>
  );
}

export default NavTabs;
