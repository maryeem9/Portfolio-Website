import FadeUp from "../motion/FadeUp"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

import sugareaseImg from "../../assets/ai.png"
import agrifertImg from "../../assets/af.png"
import cyber from "../../assets/cyber.png"
import gr from "../../assets/gr.png"
import portfolio from "../../assets/spwhite2.png"
import thinkboardVideo from "../../assets/thinkboard.mp4";
import mern_tb from "../../assets/mern-tb.png"

const projects = [
  {
    title: "Sugarease",
    type: "AI-Powered Mobile App",
    featured: true,
    image: sugareaseImg,
    showLive: false,
    description:
      "Sugarease is a mobile application designed to help diabetic patients manage glucose levels, insulin intake, blood pressure, and diet using AI-powered food recognition and real-time health tracking.",
    highlights: [
      "AI-powered food recognition for diet tracking",
      "Real-time glucose and health monitoring",
      "Accessible, patient-focused UI",
    ],
    tech: ["React Native", "Firebase", "REST APIs", "AI"],
    github: "https://github.com/maryeem9/Sugarease/tree/main",
  },
 {
  title: "GR Agro Services",
  type: "Web Developer (Client Work)",
  showLive: true,
  featured: true,
  image: gr,
  description:
    "Designed and developed a professional business website for GR Agro Services, focusing on clear content structure, responsive layout, and a strong digital presence for an agricultural services company.",
  tech: ["React", "Tailwind CSS", "Responsive Design"],
  live: "https://gragroservices.com",
},

{
  title: "ThinkBoard",
  type: "MERN Stack Project",
  showLive: false,          // no live deployment
  featured: false,
  image: mern_tb,              // or add a screenshot later
  description:
    "A full-stack notes application built with the MERN stack. Users can create, view, edit, and delete notes with data persisted in MongoDB. Built with a REST API, clean component structure, and a local development workflow.",


  tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
  github: "https://github.com/maryeem9/mern-thinkboard",
  demoVideo: thinkboardVideo,
},


  
  {
    title: "AgriFert ",
    type: "Frontend Project",
    featured: true,
    image: agrifertImg,
    showLive: false,
    description:
      "AgriFert is a multi-page responsive site that showcases fertilizer products, regional offerings, and user-facing documentation.",
    tech: ["HTML5", "CSS3", "JavaScript" , "Bootstrap"],
    github: "https://github.com/maryeem9/AgriFert",
  },



  {
    title: "Cybersecurity Themed Website",
    type: "Personal Project",
    showLive: true,
    featured: false,
    image: cyber,
   description:
  "An experimental frontend project exploring how modern cybersecurity concepts can be communicated through calm motion, spatial layout, and interactive 3D visuals.",

    tech: ["React", "TypeScript", "Three.js", "Tailwind CSS"],
    github: "https://github.com/maryeem9/cyber-visual",
    live: "https://cyber-visual.vercel.app/",
  },
  {
  title: "Sample Portfolio Website",
  type: "Personal Project",
  showLive: true,
  featured: false,
  image: portfolio, // update image import accordingly
  description:
    "A modern, responsive portfolio website built to showcase frontend skills, clean UI structure, and smooth user interactions. The project focuses on component-based architecture, theme consistency, animated backgrounds, and accessibility-first design.",

  tech: ["React", "Vite", "Tailwind CSS", "Lucide Icons"],
  github: "https://github.com/maryeem9/sample-portfolio",
  live: "https://sample-portfolio-black.vercel.app/",
}

]

const Projects = () => {
  return (
    <section className="w-full py-24 px-6 md:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center">
            Projects
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <FadeUp key={project.title} delay={index * 0.1}>
              <div
                className={`
                  group relative rounded-2xl overflow-hidden
                  border border-[#c4a18e]/30
                  bg-gradient-to-br from-[#0f0f0f] to-[#151515]
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-[#c4a18e]/60
                  hover:shadow-[0_0_40px_rgba(196,161,142,0.25)]
                  ${project.featured ? "md:col-span-2" : ""}
                `}
              >
                {/* IMAGE */}
                {project.image ? (
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full h-56 object-cover
                        transition-transform duration-700 ease-out
                        group-hover:scale-[1.06]
                      "
                    />
                  </div>
                ) : (
                  <div className="w-full h-56 bg-gradient-to-br from-[#1a1a1a] to-black flex items-center justify-center">
                    <span className="text-gray-500 text-sm">
                      Project Preview
                    </span>
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-8 relative z-10">
                  <span className="text-xs uppercase tracking-wider text-[#c4a18e]">
                    {project.type}
                  </span>

                  <h3 className="text-2xl font-semibold mt-2 mb-4">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                    {project.description}
                  </p>

                  {project.highlights && (
                    <ul className="mb-6 space-y-2">
                      {project.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <span className="text-[#c4a18e] mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="
                          text-xs px-3 py-1 rounded-full
                          border border-[#c4a18e]/30
                          text-gray-300
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                 {/* LINKS */}
{/* LINKS */}
<div className="flex gap-6">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      className="
        flex items-center gap-2
        text-gray-300
        transition-colors
        hover:text-[#c4a18e]
      "
    >
      <FaGithub /> GitHub
    </a>
  )}

  {project.demoVideo && (
    <a
      href={project.demoVideo}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-2
        text-gray-300
        transition-colors
        hover:text-[#c4a18e]
      "
    >
      <FaExternalLinkAlt /> Demo Video
    </a>
  )}

  {project.showLive && project.live && (
    <a
      href={project.live}
      target="_blank"
      className="
        flex items-center gap-2
        text-gray-300
        transition-colors
        hover:text-[#c4a18e]
      "
    >
      <FaExternalLinkAlt /> Live
    </a>
  )}
</div>


                </div>

                {/* FEATURED GLOW */}
                {project.featured && (
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#c4a18e]/30" />
                )}
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
