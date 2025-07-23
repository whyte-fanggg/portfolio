import { useState, useRef } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
import { motion } from "framer-motion"

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

      <div className="contact-socials">
        <a
          href="https://www.linkedin.com/in/stephenchintalapudi-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/whyte-fanggg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  )
}

export default Contact
