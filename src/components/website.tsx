import React, { useState } from 'react';
import { Menu, GithubIcon, MailIcon, LinkedinIcon, Code2Icon, PaletteIcon, BrainCircuitIcon } from 'lucide-react';

const PersonalWebsite: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div 
        className="fixed inset-0 w-full h-full -z-10 animate-gradient"
        style={{
          background: 'linear-gradient(-45deg, #ff0000, #ff7300, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      />
      
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      
      {/* Content Overlay */}
      <div className="relative min-h-screen backdrop-blur-sm">
        {/* Navigation */}
        <nav className="p-6 flex justify-between items-center">
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-col md:flex-row gap-4">
              <a href="#about" className="text-white hover:text-blue-200 transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-blue-200 transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
          <h2 className="text-6xl font-bold mb-6 text-white drop-shadow-lg">Hi, I'm Emre Er</h2>
          <p className="text-xl text-white mb-8 drop-shadow-lg">Full Stack Developer | Designer | Creator</p>
          <div className="flex gap-4 text-white">
            <a href="https://github.com/emazen" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-6 w-6 hover:scale-125 cursor-pointer transition-all duration-200" />
            </a>
            <a href="https://linkedin.com/in/emre-er-063b7a11a/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="h-6 w-6 hover:scale-125 cursor-pointer transition-all duration-200" />
            </a>
            <a href="mailto:emreer199@gmail.com">
              <MailIcon className="h-6 w-6 hover:scale-125 cursor-pointer transition-all duration-200" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">About Me</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              I'm a passionate Full Stack Developer based in Istanbul. With a strong foundation in both front-end and back-end development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="backdrop-blur-md rounded-lg p-8 text-center">
              <Code2Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Development</h3>
              <p className="text-white/80">
                React, Node.js, TypeScript, Python, and modern web technologies.
              </p>
            </div>

            <div className="backdrop-blur-md rounded-lg p-8 text-center">
              <PaletteIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Design</h3>
              <p className="text-white/80">
                UI/UX Design, Responsive Layouts, and Visual Design principles.
              </p>
            </div>

            <div className="backdrop-blur-md rounded-lg p-8 text-center">
              <BrainCircuitIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Problem Solving</h3>
              <p className="text-white/80">
                Algorithm Design, System Architecture, and Creative Solutions.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-white text-center">Technologies I Work With</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                'JavaScript/TypeScript',
                'React',
                'Node.js',
                'Python',
                'SQL',
                'AWS',
                'Docker',
                'Git'
              ].map((tech) => (
                <div key={tech} className="backdrop-blur-md rounded-lg p-4 text-white/90">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PersonalWebsite;