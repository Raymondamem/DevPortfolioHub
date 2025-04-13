export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  embedded: Skill[];
  software: Skill[];
  simulation: Skill[];
};

export const skills: SkillCategory = {
  embedded: [
    { name: "Microcontroller Programming", level: 95 },
    { name: "PCB Design & Layout", level: 90 },
    { name: "RTOS & Real-time Systems", level: 85 },
    { name: "Low-level Driver Development", level: 88 },
    { name: "Wireless Communication Protocols", level: 80 }
  ],
  software: [
    { name: "C/C++", level: 95 },
    { name: "Python", level: 90 },
    { name: "Web Technologies (JavaScript, React)", level: 82 },
    { name: "Database Systems", level: 78 }
  ],
  simulation: [
    { name: "Circuit Simulation", level: 92 },
    { name: "Physical System Modeling", level: 85 },
    { name: "MATLAB/Simulink", level: 88 },
    { name: "3D Visualization & Rendering", level: 80 },
    { name: "Computational Fluid Dynamics", level: 75 }
  ]
};
