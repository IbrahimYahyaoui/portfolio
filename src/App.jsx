import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      document.body.style.overflow = "auto"; // Enable scrolling
    };

    document.body.style.overflow = "hidden"; // Disable scrolling

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {!isLoaded && (
        <div className="absolute z-50 flex h-screen w-full items-center justify-center bg-black text-white">
          <div className="spinner fontPacifico animate-spin text-4xl">IB</div>
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
