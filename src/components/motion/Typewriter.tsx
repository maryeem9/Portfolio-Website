import { useEffect, useState } from "react"

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
}

const Typewriter = ({ text, speed = 80, className = "" }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index])
        setIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setFinished(true)
    }
  }, [index, text, speed])

  return (
    <span className={className}>
      {displayedText}
      {!finished && <span className="animate-pulse">|</span>}
    </span>
  )
}

export default Typewriter
