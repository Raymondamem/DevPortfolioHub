import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute("id") || "";

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full bg-background z-50 border-b border-border shadow-md px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="font-mono font-bold text-blue-400 text-xl flex items-center gap-2">
            <span className="text-blue-400">&lt;</span>Amem, Raymond A.           <span className="text-blue-400">/&gt;</span>
          </a>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link relative font-medium transition duration-300 ${
                activeSection === link.href.substring(1)
                  ? "text-blue-400"
                  : "text-foreground hover:text-blue-400"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(link.href)
                  ?.scrollIntoView({ behavior: "smooth" });
                if (isMenuOpen) setIsMenuOpen(false);
              }}
            >
              {link.label}
              <motion.span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 ${
                  activeSection === link.href.substring(1) ? "w-full" : ""
                }`}
                animate={{
                  width: activeSection === link.href.substring(1) ? "100%" : "0%",
                }}
                transition={{ duration: 0.3 }}
              />
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-foreground hover:text-blue-400 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden bg-background absolute w-full left-0 py-4 shadow-lg overflow-hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium transition duration-300 ${
                activeSection === link.href.substring(1)
                  ? "text-blue-400"
                  : "text-foreground hover:text-blue-400"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(link.href)
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsMenuOpen(false);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
