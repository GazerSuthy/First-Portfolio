import "./App.css";
import { useState, useEffect, useRef } from "react";

// components
import Header from "./components/header";
import Hero from "./components/hero";
import Abilities from "./components/abilities";
import Resonate from "./components/resonate";
import Websites from "./components/websites";

function App() {
  const [scrollTo, setScrollTo] = useState("");

  // set a ref for each component
  const appsRef = useRef(null);
  const websitesRef = useRef(null);

  // scroll functions
  const scrollToHome = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };
  const scrollToApps = () => {
    appsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToWebsites = () => {
    websitesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // call scroll functions
    if (scrollTo === "home") {
      scrollToHome();
      setScrollTo("");
    } else if (scrollTo === "apps") {
      scrollToApps();
      setScrollTo("");
    } else if (scrollTo === "websites") {
      scrollToWebsites();
      setScrollTo("");
    }
  }, [scrollTo]);

  return (
    <div className="App">
      <Header className="header-section" setScrollTo={setScrollTo}></Header>
      <div className="page">
        <Hero></Hero>
        <Abilities></Abilities>
        <Resonate passedRef={appsRef}></Resonate>
        <Websites passedRef={websitesRef}></Websites>
      </div>
    </div>
  );
}

export default App;
