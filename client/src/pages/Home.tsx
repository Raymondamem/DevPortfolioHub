import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import SkillsSection from "@/components/home/SkillsSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import ResumeSection from "@/components/home/ResumeSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans min-h-screen flex flex-col">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <PortfolioSection />
        <ResumeSection />
        <ContactSection />
      </motion.main>
      <Footer />
    </div>
  );
}
