import { motion } from "framer-motion"
import { FaRocket, FaCode, FaPuzzlePiece } from "react-icons/fa"

const cards = [
  {
    icon: <FaRocket size={28} />,
    title: "Launch-Ready Code",
    desc: "I don't write code to test — I write it to ship. Everything I build is production-minded from day one.",
  },
  {
    icon: <FaPuzzlePiece size={28} />,
    title: "Design × Logic",
    desc: "I merge UX with architecture. Frontend is clean, backend is lean, and everything in between is intentional.",
  },
  {
    icon: <FaCode size={28} />,
    title: "Dev That Scales",
    desc: "Reusable components. Modular APIs. No bloat. Just clean, scalable systems that grow with your product.",
  },
]

function WhyMe() {
  return (
    <div style={{ width: "100%" }}>
      <h2
        style={{
          fontSize: "clamp(28px, 5vw, 36px)",
          fontWeight: 700,
          marginBottom: "40px",
          color: "var(--text-color)",
          textAlign: "center",
        }}
      >
        Why Work With Me
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            style={{
              width: "300px",
              minHeight: "260px",
              background: "var(--card-bg)",
              color: "var(--text-color)",
              padding: "24px 20px",
              borderRadius: "16px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              textAlign: "center",
              flexShrink: 0, // ✅ prevents squeezing on small screens
            }}
          >
            <div
              style={{ marginBottom: "12px", color: "var(--primary-color)" }}
            >
              {card.icon}
            </div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "12px",
              }}
            >
              {card.title}
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.5 }}>{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default WhyMe
