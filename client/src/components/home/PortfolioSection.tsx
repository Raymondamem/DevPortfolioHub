import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaArrowRight, FaCube, FaWaveSquare, FaRobot, FaMicrochip, FaWifi } from "react-icons/fa";
import { CodeBlock } from "@/components/ui/code-block";
import { Button } from "@/components/ui/button";
import { portfolioItems } from "@/data/portfolio";

const codeExample = `// Circuit simulation initialization
const simulator = new CircuitSimulator({
  sampleRate: 44100,
  components: [
    new Resistor(1000), // 1kΩ resistor
    new Capacitor(0.0000001), // 0.1μF capacitor
    new VoltageSource(5) // 5V source
  ]
});

// Run simulation and render results
simulator.simulate();
renderer.updateView(simulator.getResults());`;

// Helper function to get the right icon component
const getIconComponent = (iconType: string) => {
  switch (iconType) {
    case 'wave':
      return <FaWaveSquare className="text-4xl text-purple-400" />;
    case 'robot':
      return <FaRobot className="text-4xl text-purple-400" />;
    case 'microchip':
      return <FaMicrochip className="text-4xl text-purple-400" />;
    case 'wifi':
      return <FaWifi className="text-4xl text-purple-400" />;
    default:
      return <FaWaveSquare className="text-4xl text-purple-400" />;
  }
};

export default function PortfolioSection() {
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

  return (
    <section id="portfolio" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simulation Portfolio
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
            Interactive simulations and technical demonstrations of my work.
          </motion.p>
        </div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6">Featured Simulation</h3>
          <Card className="bg-card border border-border overflow-hidden shadow-lg">
            <div className="w-full h-96 bg-secondary flex items-center justify-center">
              <div className="text-center p-8">
                <FaCube className="text-6xl text-blue-400 mb-4 mx-auto" />
                <h4 className="text-xl font-bold mb-2">Real-time Circuit Simulation</h4>
                <p className="text-muted-foreground mb-4">Interactive demo of analog circuit simulation with dynamic parameter adjustment.</p>
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Load Simulation
                </Button>
              </div>
            </div>
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-2">Real-time Circuit Simulation</h4>
              <p className="text-muted-foreground mb-4">
                This interactive simulation allows users to explore analog circuit behavior by adjusting component values in real-time. See how changes affect voltage, current, and frequency response.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-secondary px-2 py-1 rounded-md">WebGL</span>
                <span className="text-xs bg-secondary px-2 py-1 rounded-md">JavaScript</span>
                <span className="text-xs bg-secondary px-2 py-1 rounded-md">Three.js</span>
                <span className="text-xs bg-secondary px-2 py-1 rounded-md">SPICE</span>
              </div>
              <CodeBlock language="javascript" code={codeExample} />
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {portfolioItems.map((portfolioItem, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full bg-card border border-border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-60 w-full bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-center mb-3">
                      {getIconComponent(portfolioItem.iconType)}
                    </div>
                    <h4 className="text-lg font-bold">{portfolioItem.title}</h4>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2">{portfolioItem.displayTitle || portfolioItem.title}</h4>
                  <p className="text-muted-foreground mb-4">
                    {portfolioItem.description}
                  </p>
                  <a href="#" className="text-blue-400 hover:text-blue-500 font-medium flex items-center gap-1 transition duration-300">
                    <span>View Demo</span>
                    <FaArrowRight className="text-sm" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
