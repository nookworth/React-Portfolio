import React, { useState } from "react";
import NavTabs from "./Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import "../styles/style.css"

const styles = {
  page: {
    background: "#F1E3D3",
    minHeight: "100vh",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "#34312D",
    borderRadius: "5px",
  },
};

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <Resume />;
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="px-md-5" style={styles.page}>{renderPage()}</div>
    </div>
  );
}
