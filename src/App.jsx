import { createContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.scss";

import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatNav from "./components/FloatNav";
import Loader from "./components/Loader";

export const themeContext = createContext(null);

function App() {
  const theme = JSON.parse(localStorage.getItem("lightTheme"));
  const [lightTheme, setLightTheme] = useState(theme);
  const [open, setOpen] = useState(false);

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

  // TIMER FOR CLEARING OUT THE LOADING SCREEN
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      <themeContext.Provider value={{ themeToggler, lightTheme }}>
        <Loader open={open} />
        {open && (
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
        )}
      </themeContext.Provider>
    </AnimatePresence>
  );
}

export default App;
