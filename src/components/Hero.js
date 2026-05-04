import React from "react";
import { Mail, ExternalLink, ChevronDown } from "lucide-react";
import { personalInfo } from "../data/personalInfo";
import { contactInfo } from "../data/contact";
import { ScrollToSection } from "./Navigation";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold">
            {personalInfo.initials}
          </div>
          <h1 className="text-4xl md:text-6xl leading-tight md:leading-snug font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {personalInfo.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent border border-gray-600 hover:border-purple-400 px-6 py-3 rounded-full transition-colors"
          >
            <ExternalLink size={20} />
            View LinkedIn
          </a>
        </div>

        <div className="animate-bounce">
          <ScrollToSection sectionId="about">
            <ChevronDown size={24} className="mx-auto text-gray-400" />
          </ScrollToSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
