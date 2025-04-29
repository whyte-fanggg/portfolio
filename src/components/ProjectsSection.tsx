import { motion } from "framer-motion"
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import project4 from "../assets/project4.jpg"
import project5 from "../assets/project5.jpg"
import project6 from "../assets/project6.jpg"

// ===== Project Data =====
const projects = [
  {
    title: "Personal Portfolio",
    description:
      "Redesigned and rebuilt my portfolio for a sleeker, faster, and more professional online presence.",
    image: project1,
    tech: [
      "⚛️ React",
      "🟦 TypeScript",
      "🎞️ Framer Motion",
      "⚡ Vite",
      "🎨 TailwindCSS",
    ],
    link: "#",
  },
  {
    title: "Smart Expense Tracker",
    description:
      "Built a responsive 3-column SaaS-style dashboard to manage expenses with real-time filtering and visual analytics.",
    image: project2,
    tech: [
      "⚛️ React",
      "📊 Chart.js",
      "🎨 CSS3",
      "🧠 Custom Hooks",
      "📁 LocalStorage",
    ],
    link: "#",
  },
  {
    title: "Creative Portfolio",
    description:
      "Designed and built a stunning personal portfolio using React and Framer Motion animations.",
    image: project3,
    tech: ["⚛️ React", "🎞️ Framer Motion", "🖌️ Figma"],
    link: "#",
  },
  {
    title: "E-Commerce UI",
    description:
      "Built a modern shopping experience with cart functionality and product filters.",
    image: project4,
    tech: ["🛒 Commerce.js", "⚛️ React", "🎨 TailwindCSS"],
    link: "#",
  },
  {
    title: "Weather Forecast App",
    description:
      "Developed a weather app pulling real-time data from OpenWeather API.",
    image: project5,
    tech: ["🌦️ OpenWeather", "⚛️ React", "🟦 TypeScript"],
    link: "#",
  },
  {
    title: "Task Manager",
    description:
      "Created a full-stack task management app with user authentication.",
    image: project6,
    tech: ["🖥️ Node.js", "📦 MongoDB", "⚛️ React"],
    link: "#",
  },
]

// ====== Projects Section ======
function ProjectsSection() {
  return (
    <>
      {/* Section Title */}
      <h1
        style={{
          fontSize: "clamp(32px, 6vw, 48px)",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: "40px",
          color: "var(--text-color)",
        }}
      >
        My Creative Playground
      </h1>

      {/* Projects Container */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          maxWidth: "1000px",
          margin: "auto",
          padding: "20px 20px",
        }}
      >
        {/* Loop through projects */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{
              position: "relative",
              height: "300px",
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "24px",
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "30px",
              color: "white",
              boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
            }}
          >
            {/* Dark Overlay for readability */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
              }}
            />

            {/* Project Title and Description */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2
                style={{
                  fontSize: "clamp(28px, 5vw, 36px)",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                {project.title}
              </h2>
              <p
                style={{
                  fontSize: "clamp(16px, 4vw, 20px)",
                  maxWidth: "500px",
                  fontWeight: 400,
                }}
              >
                {project.description}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "30px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                zIndex: 1,
              }}
            >
              {project.tech.map((item) => (
                <span
                  key={item}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    padding: "6px 14px",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: 500,
                    backdropFilter: "blur(6px)",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)"
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.25)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"
                    e.currentTarget.style.backgroundColor =
                      "rgba(255, 255, 255, 0.15)"
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* View Project Button */}
            <a
              href={project.link}
              style={{
                position: "absolute",
                bottom: "20px",
                right: "30px",
                backgroundColor: "var(--primary-color)",
                color: "white",
                padding: "12px 24px",
                borderRadius: "50px",
                fontWeight: 600,
                fontSize: "16px",
                textDecoration: "none",
                boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
                transition: "all 0.3s ease",
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)"
                e.currentTarget.style.backgroundColor = "#333"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.backgroundColor = "var(--primary-color)"
              }}
              target="_blank" // Open in new tab (future proof)
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </section>
    </>
  )
}

export default ProjectsSection
