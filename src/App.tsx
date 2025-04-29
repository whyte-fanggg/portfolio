import Navbar from "./components/Navbar"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Hero from "./components/Hero"

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* <section id="home" style={{ paddingTop: "80px", minHeight: "100vh" }}>
        <h1
          style={{ textAlign: "center", fontSize: "48px", marginTop: "60px" }}
        >
          Welcome to My Portfolio
        </h1>
      </section> */}

      <section id="about" style={{ paddingTop: "80px", minHeight: "100vh" }}>
        <About />
      </section>

      <section id="projects" style={{ paddingTop: "80px", minHeight: "100vh" }}>
        <Projects />
      </section>

      <section id="contact" style={{ paddingTop: "80px", minHeight: "100vh" }}>
        <Contact />
      </section>
    </>
  )
}

export default App
