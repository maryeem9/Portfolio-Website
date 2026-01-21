import FadeUp from "../motion/FadeUp"
import { FaNodeJs } from "react-icons/fa"
import { SiMongodb, SiExpress } from "react-icons/si"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaMobileAlt,
  FaBrain,
  FaCode,
  FaServer,
  FaDatabase,
  FaRobot,
  FaBug,
  FaBolt,
} from "react-icons/fa"
import {
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiFirebase,
  SiFastapi,
} from "react-icons/si"

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Three.js", icon: SiThreedotjs },
      { name: "React Native", icon: FaMobileAlt },
    ],
  },
  {
  title: "Backend / APIs",
  skills: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Firebase", icon: SiFirebase },
    { name: "Git", icon: FaGitAlt },
  ],
},

//   {
//     title: "Mobile & Tools",
//     skills: [
//       { name: "React Native", icon: FaMobileAlt },
//       { name: "Git", icon: FaGitAlt },
//     ],
//   },
  {
    title: "AI",
    skills: [{ name: "AI Integration", icon: FaBrain }],
  },
]

const capabilities = [
  { text: "Build responsive frontend pages using modern web technologies", icon: FaCode },
  { text: "Assist in developing full-stack web applications", icon: FaServer },
  { text: "Integrate APIs and handle backend logic", icon: FaServer },
  { text: "Work with databases for storing and retrieving data", icon: FaDatabase },
  { text: "Add AI features such as chat interfaces and intelligent functionality", icon: FaRobot },
  { text: "Debug issues, test features, and improve UI based on feedback", icon: FaBug },
  { text: "Learn quickly and adapt to new tools and frameworks", icon: FaBolt },
]

const Skills = () => {
  return (
    <section className="w-full py-24 px-6 md:px-16 bg-[#0b0b0b] text-white">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-semibold mb-14 text-center">
            Skills
          </h2>
        </FadeUp>

        {/* SKILLS — UPDATED */}
        <div className="space-y-12">
          {skillGroups.map((group, index) => (
            <FadeUp key={group.title} delay={index * 0.08}>
              <div>
                <h3 className="text-lg font-semibold mb-5">
                  {group.title}
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                  {group.skills.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="
                        flex flex-col items-center justify-center gap-2
                        rounded-lg
                        border border-[#c4a18e]/25
                        bg-black/50
                        py-4
                        transition-colors duration-300
                        hover:border-[#c4a18e]/50
                      "
                    >
                      <Icon
                        size={20}
                        className="text-[#c4a18e]/80"
                      />
                      <span className="text-xs text-gray-300">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* WHAT I CAN DO — UNCHANGED */}
        <div className="mt-32">
          <FadeUp>
            <div
              className="
                rounded-2xl border border-[#c4a18e]/30
                bg-gradient-to-br from-[#0f0f0f] to-[#161616]
                p-10 md:p-14
              "
            >
              <h3 className="text-2xl font-semibold mb-12 text-center text-[#c4a18e]">
                What I Can Do
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {capabilities.map(({ text, icon: Icon }, i) => (
                  <FadeUp key={text} delay={i * 0.08}>
                    <li
                      className="
                        group flex items-start gap-4
                        rounded-xl p-4
                        transition-all duration-300
                        hover:bg-[#ffffff05]
                      "
                    >
                      <Icon
                        size={20}
                        className="mt-1 text-[#c4a18e] opacity-80"
                      />
                      <span className="text-gray-300 leading-relaxed">
                        {text}
                      </span>
                    </li>
                  </FadeUp>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  )
}

export default Skills
