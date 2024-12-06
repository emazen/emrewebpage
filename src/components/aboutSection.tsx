import React from 'react';
import { Code2Icon, PaletteIcon, BrainCircuitIcon } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      {/* Intro Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">About Me</h2>
        <p className="text-xl text-white/90 leading-relaxed">
          I'm a passionate Full Stack Developer based in Istanbul. With a strong foundation in both front-end and back-end development.
        </p>
      </div>

      {/* Skills & Expertise */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 text-center hover:bg-black/50 transition-all">
          <Code2Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-4 text-white">Development</h3>
          <p className="text-white/80">
            React, Node.js, TypeScript, Python, and modern web technologies.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 text-center hover:bg-black/50 transition-all">
          <PaletteIcon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-4 text-white">Design</h3>
          <p className="text-white/80">
            UI/UX Design, Responsive Layouts, and Visual Design principles.
          </p>
        </div>

        <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 text-center hover:bg-black/50 transition-all">
          <BrainCircuitIcon className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-4 text-white">Problem Solving</h3>
          <p className="text-white/80">
            Algorithm Design, System Architecture, and Creative Solutions.
          </p>
        </div>
      </div>

      {/* Journey Section */}
      <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-lg p-8 mb-16">
        <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
        <div className="space-y-6 text-white/90">
          <p className="leading-relaxed">
            My journey in technology began with [Your Starting Point]. Over the years, I've had the opportunity to work on diverse projects that have shaped my expertise in full-stack development.
          </p>
          <p className="leading-relaxed">
            I believe in continuous learning and staying updated with the latest technologies. My experience includes working with startups and established companies, where I've contributed to [Specific Achievements or Projects].
          </p>
          <p className="leading-relaxed">
            When I'm not coding, you can find me [Your Interests/Hobbies]. I believe these activities help maintain creativity and bring fresh perspectives to my work.
          </p>
        </div>
      </div>

      {/* Technologies */}
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
            <div key={tech} className="bg-black/40 backdrop-blur-md rounded-lg p-4 text-white/90 hover:bg-black/50 transition-all">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;