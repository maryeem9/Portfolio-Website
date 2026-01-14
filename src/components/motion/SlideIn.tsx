import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  direction?: "left" | "right"
  delay?: number
}

const SlideIn = ({ children, direction = "left", delay = 0 }: Props) => {
  const x = direction === "left" ? -60 : 60

  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

export default SlideIn
