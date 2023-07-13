import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Analytics } from "@vercel/analytics/react";
function App() {
  window.addEventListener("load", onPageLoad);
  function onPageLoad() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  }
  return (
    <>
      <div>
        <div className="loader flex h-screen w-screen items-center justify-center bg-black">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-purple-500"></div>
        </div>
      </div>

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
