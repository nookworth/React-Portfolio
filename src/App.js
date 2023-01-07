import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const styles = {
  page: {
    background: "#F3F3F4",
    fontFamily: "Garamond",
  },
};

function App() {
  return (
    <div style={styles.page}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
