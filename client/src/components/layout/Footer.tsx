import { Link } from "wouter";
import { FaGithub, FaLinkedinIn, FaTwitter, FaMediumM } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <a className="font-mono font-bold text-blue-400 text-xl flex items-center gap-2">
                <span className="text-blue-400">&lt;</span>Amem, Raymond Aondoakura
                <span className="text-blue-400">/&gt;</span>
              </a>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Embedded Systems Engineer & Simulation Developer
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/Raymondamem"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-400 transition duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/raymond-amem-630a421b8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-400 transition duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-400 transition duration-300"
                aria-label="Twitter Profile"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://medium.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-400 transition duration-300"
                aria-label="Medium Profile"
              >
                <FaMediumM className="text-xl" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Alex Mitchell. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
