import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa"

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: hovered
            ? "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)"
            : "white",

          color: hovered ? "#ffffff" : "#0d47a1",
          border: "none",
          boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={18} />
      </button>
    )
  )
}

export default ScrollToTopButton
