type Tech = {
  name: string
  emoji: string
}

const stack: Tech[] = [
  { name: "React", emoji: "⚛️" },
  { name: "TypeScript", emoji: "🟦" },
  { name: "Vite", emoji: "⚡" },
  { name: "Framer Motion", emoji: "🎞️" },
  { name: "TailwindCSS", emoji: "💨" },
  { name: "Firebase", emoji: "🔥" },
  { name: "HTML5", emoji: "🧡" },
  { name: "CSS3", emoji: "🎨" },
  { name: "JavaScript", emoji: "💛" },
  { name: "Node.js", emoji: "🟢" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "Supabase", emoji: "🛠️" },
  { name: "Chart.js", emoji: "📊" },
  { name: "OpenAI API", emoji: "🧠" },
  { name: "EmailJS", emoji: "✉️" },
  { name: "Quill.js", emoji: "📝" },
  { name: "jsPDF", emoji: "📄" },
  { name: "Context API", emoji: "🧩" },
  { name: "Day.js", emoji: "📅" },
  { name: "LeafletJS", emoji: "🗺️" },
  { name: "Express.js", emoji: "🚂" },
  { name: "Docker", emoji: "🐳" },
]

function TechStack() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
        Technologies I Work With
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        {stack.map((tech) => (
          <div
            key={tech.name}
            title={tech.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 16px",
              backgroundColor: "var(--card-bg)",
              color: "var(--badge-text)",
              borderRadius: "20px",
              fontSize: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              cursor: "default",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)"
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.15)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)"
            }}
          >
            <span style={{ fontSize: "22px" }}>{tech.emoji}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
