import { FaGraduationCap, FaBriefcase } from "react-icons/fa"

const timeline = [
  {
  type: "experience",
  title: "Web Developer",
  place: "Personal Projects & Continuous Learning",
  duration: "Nov 2025 – Present",
  description:
    "Developing personal projects to refine web development skills and explore modern technologies. Emphasis on clean code, responsive design, usability, and building real-world features through hands-on practice."
},


  
  {
    type: "experience",
    title: "Web Developer",
    place: "GR Agro Services",
    duration: "July 2025 – Nov 2025",
    description:
      "Built a responsive business website using React, TypeScript, and Tailwind CSS. Implemented product pages, dealer contact features, and basic backend functionality with a focus on usability and responsiveness. Collaborated with the client to ensure the site met their needs and expectations. ",
  },
  {
    type: "experience",
    title: "Artificial Intelligence Intern",
    place: "Fista Solutions",
    duration: "Jan 2025 - May 2025",
    description:
      "Assisted in developing AI-powered features using OpenAI SDK and Ollama. Integrated AI functionality into web applications and gained real-world experience with FastAPI.",
  },
   {
    type: "education",
    title: "BS Computer Science",
    place: "National University of Modern Languages",
    duration: "2021 – 2025",
    description:
      "Gold Medalist • 3.87 / 4.00 GPA\nStudied core computer science concepts including programming, data structures, databases, and web development.",
  },
]

const Journey = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 bg-black text-white overflow-hidden">

      {/* 🔹 FLOATING PARTICLES BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(22)].map((_, i) => (
          <span
            key={i}
            className="floating-dot"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center">
          My Journey
        </h2>

        <div className="relative">
          {/* TIMELINE LINE */}
          <div className="absolute left-6 top-0 h-full w-px bg-[#c4a18e]/60" />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const Icon =
                item.type === "education"
                  ? FaGraduationCap
                  : FaBriefcase

              return (
                <div key={index} className="relative flex gap-8">

                  {/* ICON */}
                  <div className="relative z-10">
                    <div
                      className="
                        w-14 h-14
                        rounded-full
                        bg-black
                        border border-[#c4a18e]/70
                        flex items-center justify-center
                        shadow-[0_0_40px_rgba(196,161,142,0.5)]
                        transition-transform duration-300
                        hover:scale-110
                      "
                    >
                      <Icon size={20} className="text-[#c4a18e]" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="pb-2 max-w-xl">
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-300 font-medium mt-1">
                      {item.place}
                    </p>

                    <span className="text-sm text-gray-400 block mt-1">
                      {item.duration}
                    </span>

                    <p className="text-gray-400 mt-3 leading-relaxed whitespace-pre-line">
                      {item.description}
                    </p>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey
