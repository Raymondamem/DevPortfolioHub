import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCertificate, 
  FaDownload,
  FaMicrochip,
  FaNetworkWired,
  FaProjectDiagram
} from "react-icons/fa";
import { experience, education, certifications } from "@/data/resume";

export default function ResumeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="resume" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Resume
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
            My professional experience and education in embedded systems and simulation engineering.
          </motion.p>
        </div>

        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button className="bg-blue-500 hover:bg-blue-600">
            <FaDownload className="mr-2" /> Download Full Resume
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaBriefcase className="text-blue-400" />
              <span>Work Experience</span>
            </motion.h3>

            <motion.div 
              className="space-y-10"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {experience.map((job, index) => (
                <motion.div 
                  key={index} 
                  className="border-l-4 border-blue-400 pl-6 relative"
                  variants={itemVariants}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-xl font-bold">{job.title}</h4>
                    <div className="flex flex-wrap gap-2 items-center text-muted-foreground mb-1">
                      <span>{job.company}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                      <span>{job.period}</span>
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs">
                      {job.type}
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    {job.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education and Certifications */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaGraduationCap className="text-red-400" />
              <span>Education</span>
            </motion.h3>

            <motion.div 
              className="space-y-10 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="border-l-4 border-red-400 pl-6 relative"
                  variants={itemVariants}
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-400 flex items-center justify-center">
                    <div className="w-3 h-3 bg-background rounded-full"></div>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-xl font-bold">{edu.degree}</h4>
                    <div className="flex flex-wrap gap-2 items-center text-muted-foreground mb-1">
                      <span>{edu.institution}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.h3 
              className="text-2xl font-bold mb-8 flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaCertificate className="text-purple-400" />
              <span>Certifications</span>
            </motion.h3>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <div className="min-w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    {cert.icon === "microchip" ? (
                      <FaMicrochip className="text-purple-400" />
                    ) : cert.icon === "network" ? (
                      <FaNetworkWired className="text-purple-400" />
                    ) : (
                      <FaProjectDiagram className="text-purple-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm">{cert.issuer} • {cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
