import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

function AboutHeader() {
  const [currentText, setCurrentText] = useState(0)

  const texts = [
    {
      id: "h1",
      text: "Hi, I'm Stephen.",
      tag: "h1",
    },
    {
      id: "h2",
      text: "Engineering creativity every day.",
      tag: "h2",
    },
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
        minHeight: "140px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={texts[currentText].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {texts[currentText].tag === "h1" ? (
            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 42px)",
                fontWeight: 700,
                margin: 0,
                color: "var(--text-color)",
              }}
            >
              {texts[currentText].text}
            </h1>
          ) : (
            <h2
              style={{
                fontSize: "clamp(24px, 4vw, 32px)",
                fontWeight: 700,
                margin: 0,
                color: "var(--text-color)",
              }}
            >
              {texts[currentText].text}
            </h2>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default AboutHeader
