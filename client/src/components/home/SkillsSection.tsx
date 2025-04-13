import { motion } from "framer-motion";
import { 
  FaMicrochip, 
  FaLaptopCode, 
  FaChartLine, 
  FaTools,
  FaGitAlt,
  FaTerminal,
  FaProjectDiagram,
  FaMicrochip as FaMicrochipAlias,
  FaCodeBranch,
  FaCogs
} from "react-icons/fa";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const tools = [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Linux/Unix", icon: <FaTerminal /> },
    { name: "Docker", icon: <FaProjectDiagram /> },
    { name: "KiCad", icon: <FaMicrochipAlias /> },
    { name: "Jenkins", icon: <FaCodeBranch /> },
    { name: "JIRA", icon: <FaCogs /> }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-blue-400 to-red-400 rounded mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            My expertise in embedded systems, simulation, and software development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaMicrochip className="text-blue-400" />
              <span>Embedded Systems</span>
            </motion.h3>

            <motion.div 
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.embedded.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full">
                    <motion.div 
                      className="h-full bg-blue-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold mt-16 mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaLaptopCode className="text-red-400" />
              <span>Software Development</span>
            </motion.h3>

            <motion.div 
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.software.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-red-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full">
                    <motion.div 
                      className="h-full bg-red-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaChartLine className="text-purple-400" />
              <span>Simulation & Modeling</span>
            </motion.h3>

            <motion.div 
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.simulation.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full">
                    <motion.div 
                      className="h-full bg-purple-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold mt-16 mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaTools className="text-green-400" />
              <span>Tools & Technologies</span>
            </motion.h3>

            <motion.div 
              className="grid grid-cols-3 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {tools.map((tool, index) => (
                <motion.div 
                  key={index} 
                  className="bg-secondary rounded-lg p-4 text-center"
                  variants={item}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl text-green-400 mb-2 flex justify-center">
                    {tool.icon}
                  </div>
                  <p className="text-sm">{tool.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
