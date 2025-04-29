import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "20px", marginTop: "50px" }}>
      <div style={{ marginBottom: "10px" }}>
        <a
          href="https://github.com/whyte-fanggg"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: "15px", color: "inherit", fontSize: "24px" }}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/stephen-francis-chintalapudi-b34588102/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", fontSize: "24px" }}
        >
          <FaLinkedin />
        </a>
      </div>
      <p>© 2025 stegadgets.com. All rights reserved.</p>
    </footer>
  )
}

export default Footer
