import { createContext, useEffect, useState } from "react";
import "./App.scss";

import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatNav from "./components/FloatNav";

export const themeContext = createContext(null);

function App() {
  const theme = JSON.parse(localStorage.getItem("lightTheme"));
  const [lightTheme, setLightTheme] = useState(theme);

  useEffect(() => {
    const page = document.querySelector("html");

    if (lightTheme === false) {
      page.classList.toggle("light", false);
    }
    if (lightTheme === true) {
      page.classList.toggle("light", true);
    }
  }, [lightTheme]);

  // TOGGLE THEME
  const themeToggler = () => {
    setLightTheme(!lightTheme);
    localStorage.setItem("lightTheme", !lightTheme);
  };

  return (
    <themeContext.Provider value={{ themeToggler, lightTheme }}>
      <main>
        <Hero />
        <div className="divider" />
        <div className="App">
          <About />
          <div className="divider" />
          <Project />
          <div className="divider" />
          <Skills />
          <div className="divider" />
          <Contact />
          <div className="divider" />
          <Footer />
          <FloatNav />
        </div>
      </main>
    </themeContext.Provider>
  );
}

export default App;
