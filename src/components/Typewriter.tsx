import { useState, useEffect } from "react"

interface Props {
  texts: string[]
}

function Typewriter({ texts }: Props) {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (index === texts.length) return

    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1))
        setText(texts[index].substring(0, subIndex))
      },
      reverse ? 20 : 20
    )

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, texts])

  return (
    <span
      style={{
        display: "inline-block",
        minWidth: "200px",
        color: "var(--primary-color)",
        fontWeight: 700,
      }}
    >
      {text}
    </span>
  )
}

export default Typewriter
