import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

function AboutHeader() {
  const [currentText, setCurrentText] = useState(0)

  const texts = [
    { id: "1", text: "Hi, I'm Stephen." },
    { id: "2", text: "I build with purpose." },
    { id: "3", text: "Engineering creativity daily." },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <div
      style={{
        width: "100%",
        padding: "40px 20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >


      {/* Rotating Text */}
      <div
        style={{
          height: "50px", // Fixed height for stability
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.h2
            key={texts[currentText].id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "clamp(20px, 4vw, 28px)",
              fontWeight: 700,
              margin: 0,
              whiteSpace: "nowrap",
              color: "var(--text-color)",
            }}
          >
            {texts[currentText].text}
          </motion.h2>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default AboutHeader
