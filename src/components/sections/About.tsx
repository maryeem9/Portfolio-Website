import me from "../../assets/photo3.png"
import SlideIn from "../motion/SlideIn"

const About = () => {
  return (
    <section className="w-full py-24 px-6 md:px-16 bg-black text-white">
      <SlideIn direction="left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* PHOTO */}
<div className="tilt-wrapper">
  <div
    className="
      w-60 h-60 md:w-72 md:h-72
      rounded-2xl overflow-hidden
      border border-[#c4a18e]/40
      tilt-card
    "
  >
    <img
      src={me}
      alt="Maryeem Rasool"
      className="w-full h-full object-contain"
    />
  </div>
</div>


          {/* TEXT */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              About Me
            </h2>

            <p className="text-gray-400 leading-relaxed">
              I’m Maryeem, a Computer Science graduate with hands-on experience in web development, database systems, and AI-based applications. I enjoy building clean, functional software solutions and learning new technologies through real-world projects and internships.
            </p>

            <p className="text-gray-400 leading-relaxed mt-4">
              I have worked on academic, freelance, and internship projects involving frontend development, backend logic, databases, and AI integrations. I’m currently focused on strengthening my full-stack development and AI skills while preparing for professional roles in software development.

            </p>
          </div>

        </div>
      </SlideIn>
    </section>
  )
}

export default About
