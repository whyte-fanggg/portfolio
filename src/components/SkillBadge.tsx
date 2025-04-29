type SkillBadgeProps = {
  label: string
  emoji: string
}

function SkillBadge({ label, emoji }: SkillBadgeProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 16px",
        fontSize: "16px",
        backgroundColor: "var(--card-bg)",
        color: "var(--badge-text)",
        border: "1px solid #444",
        borderRadius: "30px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        transition: "all 0.3s ease",
      }}
    >
      <span style={{ fontSize: "20px" }}>{emoji}</span>
      <span>{label}</span>
    </div>
  )
}

export default SkillBadge
