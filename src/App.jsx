import React from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import useLocalStorage from "use-local-storage";
import "/src/index.css";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log(theme);
    setTheme(newTheme);
  };

  return (
    <div className="app" data-theme={theme}>
      <Navbar handleClick={switchTheme} />
      <Hero />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
