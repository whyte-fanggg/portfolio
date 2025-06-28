import '../styles/ProjectMatrix.css'
import { motion } from "framer-motion"
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import project4 from "../assets/project4.jpg"
import project5 from "../assets/project5.jpg"

const tiles = [
  // Small foundational blocks (custom tools & snippets)
  { size: "s", label: "useToggle()", type: "snippet" },
  { size: "s", label: "useFormPersist()", type: "snippet" },
  { size: "s", label: "useScrollSpy()", type: "snippet" },
  { size: "s", label: "validateFields()", type: "snippet" },

  // Custom libraries (branded, reusable modules)
  { size: "s", label: "@stegadgets/ui-kit", type: "library" },
  { size: "s", label: "@stegadgets/hooks", type: "library" },
  { size: "s", label: "@stegadgets/anim", type: "library" },
  { size: "s", label: "@stegadgets/logger", type: "library" },

  // Medium conceptual projects
  { size: "m", label: "Blog Writer", image: project2, type: "concept" },
  { size: "m", label: "Invoice Generator", image: project3, type: "concept" },

  // Large and extra-large live projects
  { size: "l", label: "Smart Expense Tracker", image: project1, type: "live", link: "https://smart-expense-tracker-khaki.vercel.app/" },
  { size: "l", label: "Portfolio Website", image: project4, type: "live", link: "https://stegadgets.com" },

  // XL - highlight project
  { size: "xl", label: "Dynamic Portfolio CMS", image: project5, type: "live", link: "https://cms-demo.vercel.app/" },
]

function ProjectMatrix() {
  return (
    <section className="matrix-grid">
      {tiles.map((tile, i) => (
        <motion.div
          key={i}
          className={`tile tile-${tile.size} ${tile.type}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {tile.image && (
            <div className="image-wrapper">
              <img src={tile.image} alt={tile.label} />
              {tile.link ? (
                <a href={tile.link} target="_blank" className="tile-button">
                  Visit Site
                </a>
              ) : (
                <span className="tile-button ghost">Deploying…</span>
              )}
            </div>
          )}
          {!tile.image && (
            <div className="tile-label">{tile.label}</div>
          )}
        </motion.div>
      ))}
    </section>
  )
}

export default ProjectMatrix
