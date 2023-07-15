import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Analytics } from "@vercel/analytics/react";
import loadingLogo from "./assets/IB.png";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      if (document.readyState === "complete") {
        setIsLoaded(true);
        document.body.style.overflow = "auto"; // Enable scrolling
      }
    };

    document.body.style.overflow = "hidden"; // Disable scrolling

    if (document.readyState === "complete") {
      setIsLoaded(true);
      document.body.style.overflow = "auto"; // Enable scrolling
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {!isLoaded && (
        <div className="absolute z-50 flex h-screen w-full items-center justify-center bg-black text-white">
          <div className="spinner fontPacifico animate-spin text-4xl">
            <img src={loadingLogo} alt="logo" />
          </div>
        </div>
      )}
      <div
        className={`${
          isLoaded ? "opacity-100 transition-opacity" : "opacity-0"
        } duration-1000 ease-in`}
      >
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <Analytics />
    </>
  );
}

export default App;
