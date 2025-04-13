import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaCode, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import raymond from "./raymond.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-blue-400 mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Amem, Raymond Aondoakura
              <span className="block mt-2 text-red-400">
                Embedded Systems Engineer
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-red-400 rounded mb-6"></div>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I specialize in embedded systems design, simulation engineering,
              and software development. With expertise in system architecture,
              real-time programming, and hardware integration, I create robust
              solutions for complex technical challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                <FaCode className="mr-2" /> View Projects
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
              >
                <FaEnvelope className="mr-2" /> Contact Me
              </Button>
              {/* +2349117511763
www.linkedin.com/in/raymond-amem-630a421b8
raymondamem525@gmail.com
https://github.com/Raymondamem */}
              <Button
                size="icon"
                variant="secondary"
                asChild
                className="bg-secondary hover:bg-secondary/90"
              >
                <a
                  href="https://github.com/Raymondamem"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
              </Button>
              <Button
                size="icon"
                variant="secondary"
                asChild
                className="bg-secondary hover:bg-secondary/90"
              >
                <a
                  href="https://www.linkedin.com/in/raymond-amem-630a421b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-2/5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 mx-auto relative bg-gray-800">
              <svg
                className="absolute inset-0 w-full h-full text-gray-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <img
                src={raymond}
                alt={raymond}
                className="absolute top-0 left-0 flex justify-center items-center w-full h-full border-0 rounded-full z-2 bg-[#1f2937] object-cover"
                loading="lazy"
              />
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-card border border-border p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-green-400">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                </div>
                <span className="font-mono text-sm">
                  Available for projects
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
