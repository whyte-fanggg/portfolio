import { useState, useEffect } from "react"
import logo from "../assets/logo.png" // ✅ Place your logo in src/assets/

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) setMenuOpen(false)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const linkStyle = {
    color: "#0d47a1",
    textDecoration: "none",
    padding: "6px 12px",
    fontWeight: 500,
    fontSize: "15px",
    position: "relative" as const,
  }

  return (
    <nav
      style={{
        backgroundColor: "#ffffff",
        padding: "8px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: "32px", width: "32px", borderRadius: "50%" }}
        />
        <span style={{ color: "#0d47a1", fontWeight: 600, fontSize: "18px" }}>
          stegadgets
        </span>
      </a>

      {/* Hover effect scoped to nav-link only */}
      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 100%;
          height: 2px;
          background-color: #0d47a1;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {isMobile ? (
          <>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "1px solid #0d47a1",
                color: "#0d47a1",
                padding: "6px 10px",
                fontSize: "14px",
              }}
            >
              Menu
            </button>

            {menuOpen && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#ffffff",
                  marginTop: "10px",
                }}
              >
                <a href="#home" className="nav-link" style={linkStyle}>
                  Home
                </a>
                <a href="#about" className="nav-link" style={linkStyle}>
                  About
                </a>
                <a href="#projects" className="nav-link" style={linkStyle}>
                  Projects
                </a>
                <a href="#contact" className="nav-link" style={linkStyle}>
                  Contact
                </a>
              </div>
            )}
          </>
        ) : (
          <>
            <a href="#home" className="nav-link" style={linkStyle}>
              Home
            </a>
            <a href="#about" className="nav-link" style={linkStyle}>
              About
            </a>
            <a href="#projects" className="nav-link" style={linkStyle}>
              Projects
            </a>
            <a href="#contact" className="nav-link" style={linkStyle}>
              Contact
            </a>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
