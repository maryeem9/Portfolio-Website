import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"

const Contact = () => {
  return (
    <section className="w-full py-24 px-6 md:px-16 bg-black text-white">
      <div className="max-w-xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Contact Me
        </h2>
           {/* DIVIDER */}
          <div className="mx-auto mb-6 h-[2px] w-16 rounded-full bg-[#c4a18e]/70" />
        <p className="text-gray-400 mb-8 leading-relaxed">
          I’m open to internships, collaborations, and frontend opportunities.
          Feel free to reach out — I’d love to talk. Let's connect!
        </p>

        {/* CONTACT DETAILS */}
        <div className="space-y-4 mb-8 text-gray-300">

          {/* EMAIL */}
          <div className="flex items-center justify-center gap-3">
            <FaEnvelope className="text-[#c4a18e]" />
            <a
              href="mailto:rasoolmaryeem@gmail.com"
              className="hover:text-[#c4a18e] transition"
            >
              rasoolmaryeem@gmail.com
            </a>
          </div>

          {/* PHONE */}
          <div className="flex items-center justify-center gap-3">
            <FaPhone className="text-[#c4a18e]" />
            <a
              href="tel:+92XXXXXXXXXX"
              className="hover:text-[#c4a18e] transition"
            >
              +92 303-000-4939
            </a>
          </div>

        </div>

        {/* SOCIALS */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/maryeem9"
            target="_blank"
            className="text-gray-400 hover:text-[#c4a18e] transition text-xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/maryeem-rasool-23a880372/"
            target="_blank"
            className="text-gray-400 hover:text-[#c4a18e] transition text-xl"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact
