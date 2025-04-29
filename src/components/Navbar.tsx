import { useState, useEffect } from "react"
import { FaSun, FaMoon } from "react-icons/fa"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setMenuOpen(false)
    }

    const currentTheme = document.documentElement.getAttribute("data-theme")
    setTheme(currentTheme || "light")

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const current = root.getAttribute("data-theme")
    const newTheme = current === "dark" ? "light" : "dark"
    root.setAttribute("data-theme", newTheme)
    setTheme(newTheme)
  }

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "10px 15px",
    fontWeight: 500,
  }

  return (
    <nav
      style={{
        backgroundColor: "var(--primary-color)",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "1px solid white",
                color: "white",
                padding: "6px 12px",
                fontSize: "16px",
              }}
            >
              Menu
            </button>

            {menuOpen && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "var(--primary-color)",
                  marginTop: "10px",
                }}
              >
                <a href="#home" style={linkStyle}>
                  Home
                </a>
                <a href="#about" style={linkStyle}>
                  About
                </a>
                <a href="#projects" style={linkStyle}>
                  Projects
                </a>
                <a href="#contact" style={linkStyle}>
                  Contact
                </a>
              </div>
            )}
          </>
        ) : (
          <>
            <a href="#home" style={linkStyle}>
              Home
            </a>
            <a href="#about" style={linkStyle}>
              About
            </a>
            <a href="#projects" style={linkStyle}>
              Projects
            </a>
            <a href="#contact" style={linkStyle}>
              Contact
            </a>
          </>
        )}
      </div>

      {/* Theme Toggle Icon */}
      <div
        onClick={toggleTheme}
        style={{
          marginTop: isMobile ? "10px" : "0",
          cursor: "pointer",
          fontSize: "22px",
          color: "white",
          padding: "6px 12px",
        }}
      >
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </div>
    </nav>
  )
}

export default Navbar
