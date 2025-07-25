import Navbar from "./components/Navbar"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Hero from "./components/Hero"
// import WhyMe from "./components/WhyMe"
// import ScrollToTopButton from "./components/ScrollToTopButton"

function App() {
  return (
    <>
      {/* // Fixed navbar */}
      <Navbar />

      {/* // Your hero section (animated background + typewriter)  */}
      <Hero />

      {/* // ABOUT SECTION */}
      <section id="about" style={{ paddingTop: "80px", minHeight: "100vh" }}>
        <About />
      </section>

      {/* // WHY ME SECTION (no scroll anchor needed) */}
      {/* <section>
        <WhyMe />
      </section> */}

      {/* // PROJECTS SECTION */}
      <section id="projects" style={{ paddingTop: "80px", minHeight: "100vh" }}>
        <Projects />
      </section>

      {/* // CONTACT SECTION */}
      <section id="contact" style={{ paddingTop: "80px", minHeight: "100vh" }}>
        <Contact />
      </section>

      {/* // SCROLL TO TOP BUTTON (fixed floating) */}
      {/* <ScrollToTopButton /> */}
    </>
  )
}

export default App
