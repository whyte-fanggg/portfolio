import { useState, useRef, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import { motion } from "framer-motion"

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

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
        aria-label="Scroll to top"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "56px",
          height: "56px",
          borderRadius: "9999px",
          border: "none",
          background: "white",
          color: "#0d47a1",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background =
            "linear-gradient(90deg, hsla(236, 100%, 8%, 1) 0%, hsla(211, 100%, 28%, 1) 100%)"
          e.currentTarget.style.color = "white"
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "white"
          e.currentTarget.style.color = "#0d47a1"
        }}
      >
        <FaArrowUp />
      </button>
    )
  )
}

function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    emailjs
      .sendForm(
        "service_c9xpj6d",
        "template_qe2av3b",
        formRef.current!,
        "C8BIi3RO1Z4dc0Gqz"
      )
      .then(
        () => {
          toast.success("Message sent!")
          formRef.current?.reset()
          setSending(false)
        },
        (error) => {
          toast.error("Something went wrong. Please try again.")
          console.error(error)
          setSending(false)
        }
      )
  }

  return (
    <section id="contact" className="contact-container">
      <h1 className="contact-title">Let's Connect</h1>

      <p className="contact-subtext">
        📫 ste.lefi@gmail.com | 📍 Windsor, ON, Canada
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="floating-label">
          <input type="text" name="from_name" required placeholder=" " />
          <label>Your Name</label>
        </div>

        <div className="floating-label">
          <input type="email" name="reply_to" required placeholder=" " />
          <label>Your Email</label>
        </div>

        <div className="floating-label">
          <textarea name="message" rows={5} required placeholder=" " />
          <label>Your Message</label>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          type="submit"
        >
          {sending ? "Sending..." : "Send Message"}
        </motion.button>
      </form>

      <ScrollToTopButton />
    </section>
  )
}

export default Contact
