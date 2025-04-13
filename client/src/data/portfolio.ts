export type PortfolioItem = {
  title: string;
  displayTitle?: string;
  description: string;
  iconType: 'wave' | 'robot' | 'microchip' | 'wifi';
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Signal Processing Visualizer",
    description: "Visual demonstration of digital signal processing algorithms including FFT, filters, and modulation techniques.",
    iconType: 'wave'
  },
  {
    title: "Robotics Kinematics Simulator",
    description: "3D simulation environment for testing robotic arm kinematics, path planning, and collision avoidance.",
    iconType: 'robot'
  },
  {
    title: "Microcontroller Instruction Set Simulator",
    displayTitle: "Microcontroller Simulator",
    description: "Detailed emulation of ARM Cortex-M instruction set with register visualization and memory mapping.",
    iconType: 'microchip'
  },
  {
    title: "Wireless Network Protocol Analyzer",
    displayTitle: "Network Protocol Analyzer",
    description: "Interactive visualization of wireless network protocols including packet analysis and transmission modeling.",
    iconType: 'wifi'
  }
];
