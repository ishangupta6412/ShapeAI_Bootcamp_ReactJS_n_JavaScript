import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Projects from "./Projects";
import FoseeProjects from "./FoseeProjects";

function App() {
  return (
    <div>
      <Header />
      <h1>Graphic Designing Projects</h1>
      <h3>Posters</h3>
      <Projects />

      <FoseeProjects />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
