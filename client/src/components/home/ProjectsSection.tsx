import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FaArrowRight, FaGithub, FaMicrochip, FaWaveSquare, FaLaptopCode, FaRobot, FaCode, FaChartLine } from "react-icons/fa";
import { projects } from "@/data/projects";

type Category = "all" | "embedded" | "simulation" | "software";

// Helper function to get the right icon component
const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case 'microchip':
      return <FaMicrochip className="text-4xl text-blue-400 opacity-60" />;
    case 'wave':
      return <FaWaveSquare className="text-4xl text-blue-400 opacity-60" />;
    case 'laptop':
      return <FaLaptopCode className="text-4xl text-blue-400 opacity-60" />;
    case 'robot':
      return <FaRobot className="text-4xl text-blue-400 opacity-60" />;
    case 'circuit':
      return <FaCode className="text-4xl text-blue-400 opacity-60" />;
    case 'chart':
      return <FaChartLine className="text-4xl text-blue-400 opacity-60" />;
    default:
      return <FaMicrochip className="text-4xl text-blue-400 opacity-60" />;
  }
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Category>("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
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
            A collection of my work in embedded systems, simulation design, and
            software development.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            variant={filter === "all" ? "default" : "secondary"}
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-blue-500 hover:bg-blue-600" : ""}
          >
            All Projects
          </Button>
          <Button
            variant={filter === "embedded" ? "default" : "secondary"}
            onClick={() => setFilter("embedded")}
            className={
              filter === "embedded" ? "bg-blue-500 hover:bg-blue-600" : ""
            }
          >
            Embedded Systems
          </Button>
          <Button
            variant={filter === "simulation" ? "default" : "secondary"}
            onClick={() => setFilter("simulation")}
            className={
              filter === "simulation" ? "bg-blue-500 hover:bg-blue-600" : ""
            }
          >
            Simulation
          </Button>
          <Button
            variant={filter === "software" ? "default" : "secondary"}
            onClick={() => setFilter("software")}
            className={
              filter === "software" ? "bg-blue-500 hover:bg-blue-600" : ""
            }
          >
            Software
          </Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="h-full bg-card border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="h-48 w-full overflow-hidden bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                  <div className="text-center">
                    {getIconComponent(project.iconType)}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <Badge
                      className={`${
                        project.category === "embedded"
                          ? "bg-blue-500/20 text-blue-400"
                          : project.category === "simulation"
                          ? "bg-purple-500/20 text-purple-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-blue-400 hover:text-blue-500 font-medium flex items-center gap-1 transition duration-300"
                    >
                      <span>View Project</span>
                      <FaArrowRight className="text-sm" />
                    </a>
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition duration-300"
                      aria-label="GitHub repository"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            variant="secondary"
            asChild
            className="flex items-center gap-2"
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
