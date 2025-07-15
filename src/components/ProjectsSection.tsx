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
    title: "Smart Expense Tracker + Budget Dashboard",
    description:
      "Responsive 3-column dashboard with expense tracking, filters, and Pie/Bar chart visualizations using Chart.js.",
    image: project1,
    tech: ["⚛️ React", "📊 Chart.js", "📁 LocalStorage"],
    link: "https://smart-expense-tracker-khaki.vercel.app/",
  },
  {
    title: "Zenaura – Origami Pomodoro Timer",
    description:
      "A serene, origami-inspired Pomodoro timer app with motivational quotes, calming audio, and AssemblyAI transcription integration.",
    image: project2,
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "🎞️ Framer Motion",
      "🔊 AssemblyAI",
      "🔥 Firebase",
    ],
    link: "https://zenaura-silk.vercel.app",
  },
  {
    title: "Taskbento – Bento-Style Task Manager",
    description:
      "A visual daily task manager inspired by bento layouts with claymorphic pastel tiles, drag-and-drop, and Firebase Firestore integration.",
    image: project3,
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "🎞️ Framer Motion",
      "🔥 Firebase",
      "💠 Styled Components",
    ],
    link: "https://taskbento.vercel.app/",
  },

  {
    title: "GlobeQuest – Country & Weather Explorer",
    description:
      "Search any country to view its flag, population, region, languages, currencies, borders, and live weather data for its capital city in a clean, premium dashboard UI.",
    image: project4,
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "💨 TailwindCSS",
      "🌐 REST Countries API",
      "☁️ OpenWeather API",
    ],
    link: "https://globequest.vercel.app/",
  },

  {
    title: "CodeLore – Snippet Manager + Markdown Editor",
    description:
      "A beautifully designed syntax-highlighted code snippet manager with Markdown storytelling and Supabase backend.",
    image: project1,
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "🖋️ Markdown",
      "🌈 PrismJS",
      "🛠️ Supabase",
    ],
    link: "https://code-lore-pi.vercel.app/",
  },

  {
    title: "Silent Auction Hub – Charity Bidding Platform",
    description:
      "A full-stack auction platform for local charities to host silent auctions with real-time bidding, image uploads, admin controls, and user authentication.",
    image: project6, // Replace with a real preview image if available
    tech: [
      "⚛️ React",
      "📝 TypeScript",
      "💨 TailwindCSS v4",
      "🎞️ Framer Motion",
      "🛠️ Supabase",
    ],
    link: "https://silent-auction-hub.vercel.app/",
  },

  {
    title: "Cloud-Based Resume Builder",
    description:
      "Users build resumes, reorder sections, and download as PDF. Data synced via Supabase.",
    image: project1,
    tech: ["⚛️ React", "🛠️ Supabase", "📄 jsPDF", "💨 TailwindCSS"],
    link: "#",
  },
  {
    title: "Task Dependency Planner for Teams",
    description:
      "Kanban board with task dependencies, priorities, and drag-and-drop interactions using DnD Kit.",
    image: project2,
    tech: ["⚛️ React", "🧩 DnD Kit", "🖥️ Node.js", "🍃 MongoDB"],
    link: "#",
  },
  {
    title: "Freelance CRM + Invoice Manager",
    description:
      "Tracked clients, projects, and invoices with full Supabase backend and PDF export via jsPDF.",
    image: project3,
    tech: ["⚛️ React", "🛠️ Supabase", "📄 jsPDF"],
    link: "#",
  },
  {
    title: "Daily Wellness Journal App",
    description:
      "Rich-text journal with mood tracking, wellness logs, and trend graphs. Used Node.js and MongoDB.",
    image: project4,
    tech: ["⚛️ React", "📝 Quill.js", "🖥️ Node.js", "🍃 MongoDB"],
    link: "#",
  },
  {
    title: "Personal Finance Goal Setter",
    description:
      "Tracked income, savings goals, and budgets with Supabase auth and Chart.js analytics.",
    image: project5,
    tech: ["⚛️ React", "🛠️ Supabase", "📊 Chart.js"],
    link: "#",
  },
  {
    title: "Remote Work Productivity Tracker",
    description:
      "Full-stack tool for logging work sessions, visualizing trends, and analyzing task focus data.",
    image: project6,
    tech: ["⚛️ React", "🍃 MongoDB", "🖥️ Express.js", "📊 Chart.js"],
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
