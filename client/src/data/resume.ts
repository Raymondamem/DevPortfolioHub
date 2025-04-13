export type Job = {
  title: string;
  company: string;
  period: string;
  type: string;
  responsibilities: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  description: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  icon: "microchip" | "network" | "project";
};

export const experience: Job[] = [
  {
    title: "Senior Embedded Systems Engineer",
    company: "TechInnovate Systems",
    period: "2020 - Present",
    type: "Full-time",
    responsibilities: [
      "Lead development of IoT-based industrial monitoring systems using ARM Cortex-M microcontrollers",
      "Designed custom PCBs and implemented firmware for wireless sensor networks",
      "Created simulation models for predictive maintenance algorithms",
      "Managed team of 5 engineers and coordinated with cross-functional departments"
    ]
  },
  {
    title: "Embedded Software Developer",
    company: "RoboTech Innovations",
    period: "2017 - 2020",
    type: "Full-time",
    responsibilities: [
      "Developed firmware for autonomous robotic systems using FreeRTOS",
      "Implemented sensor fusion algorithms for accurate positioning and navigation",
      "Created simulation environments for testing robot behaviors",
      "Optimized code for real-time performance and power efficiency"
    ]
  },
  {
    title: "Junior Hardware Engineer",
    company: "ElectroCore Systems",
    period: "2015 - 2017",
    type: "Full-time",
    responsibilities: [
      "Assisted in designing and testing consumer electronic products",
      "Contributed to schematic capture and PCB layout for new product lines",
      "Conducted various hardware tests and validation procedures",
      "Wrote technical documentation and test reports"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Master of Science in Electrical Engineering",
    institution: "Stanford University",
    period: "2013 - 2015",
    description: "Specialized in Embedded Systems and Digital Signal Processing. Thesis focused on real-time adaptive control systems for robotics applications."
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Massachusetts Institute of Technology",
    period: "2009 - 2013",
    description: "Graduated with honors. Coursework included microprocessor design, computer architecture, signal processing, and control systems."
  }
];

export const certifications: Certification[] = [
  {
    name: "ARM Certified Engineer",
    issuer: "ARM Ltd.",
    year: "2018",
    icon: "microchip"
  },
  {
    name: "Certified IoT Solutions Architect",
    issuer: "IoT Academy",
    year: "2019",
    icon: "network"
  },
  {
    name: "Project Management Professional (PMP)",
    issuer: "Project Management Institute",
    year: "2020",
    icon: "project"
  }
];
