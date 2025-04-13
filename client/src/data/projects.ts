export type Project = {
  id: number;
  title: string;
  description: string;
  category: "embedded" | "simulation" | "software";
  technologies: string[];
  iconType: 'microchip' | 'wave' | 'laptop' | 'robot' | 'circuit' | 'chart';
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Smart Home Automation System",
    description: "A modular smart home system with custom PCB design, wireless communication, and sensor integration for energy efficiency.",
    category: "embedded",
    technologies: ["ESP32", "PCB Design", "MQTT", "C++"],
    iconType: 'microchip'
  },
  {
    id: 2,
    title: "Real-time Fluid Dynamics Simulator",
    description: "High-performance fluid dynamics simulator using CUDA for real-time visualization of complex fluid behaviors.",
    category: "simulation",
    technologies: ["CUDA", "C++", "OpenGL", "Python"],
    iconType: 'wave'
  },
  {
    id: 3,
    title: "Embedded Systems IDE",
    description: "Custom IDE for embedded systems development featuring real-time debugging, code analysis, and hardware monitoring.",
    category: "software",
    technologies: ["Electron", "TypeScript", "React", "Node.js"],
    iconType: 'laptop'
  },
  {
    id: 4,
    title: "Autonomous Drone Controller",
    description: "Real-time control system for autonomous drones with computer vision processing and path planning algorithms.",
    category: "embedded",
    technologies: ["ARM Cortex", "FreeRTOS", "OpenCV", "C"],
    iconType: 'robot'
  },
  {
    id: 5,
    title: "Circuit Simulation Platform",
    description: "Interactive digital and analog circuit simulator with real-time waveform visualization and component analysis.",
    category: "simulation",
    technologies: ["SPICE", "C++", "Qt", "Python"],
    iconType: 'circuit'
  },
  {
    id: 6,
    title: "IoT Data Visualization Platform",
    description: "Real-time dashboard for IoT device monitoring with customizable widgets, alerts, and historical data analysis.",
    category: "software",
    technologies: ["React", "Node.js", "D3.js", "MongoDB"],
    iconType: 'chart'
  }
];
