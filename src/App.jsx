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
    // Listen for the window.onload event.
    window.onload = () => {
      setIsLoaded(true);
    };
  }, []);

  return (
    <>
      {!isLoaded && (
        <div>
          <div className="absolute z-50 flex h-screen w-screen items-center justify-center bg-black">
            <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-purple-500"></div>
          </div>
        </div>
      )}

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
