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
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      // prevent scroll
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (isLoaded) {
      document.body.style.overflow = "auto";
      setLoader(false);
    }
  }, [isLoaded]);

  return (
    <>
      {loader && (
        <div>
          <div className="absolute z-50 flex h-full w-full items-center justify-center bg-black text-white">
            <div className="spinner fontPacifico h-14 w-14 animate-spin border-4 border-purple-800 ">
              IB
            </div>
          </div>
        </div>
      )}{" "}
      <Analytics />
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
