import React from "react";
import { Code, Award, User, Briefcase } from "lucide-react";
import { personalInfo } from "../data/personalInfo";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {personalInfo.aboutIntro}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {personalInfo.aboutSupporting}
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">
                  {personalInfo.stats.yearsExperience}
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">
                  {personalInfo.stats.technologies}
                </div>
                <div className="text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-500/20">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-400 text-sm">
                React, Next.js, TypeScript, PWA
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-purple-500/20">
              <Award className="text-purple-400 mb-4" size={32} />
              <h3 className="font-semibold mb-2">System Architecture</h3>
              <p className="text-gray-400 text-sm">
                Scalable & maintainable solutions
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 p-6 rounded-lg border border-green-500/20">
              <User className="text-green-400 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Team Leadership</h3>
              <p className="text-gray-400 text-sm">
                Agile methodologies & mentoring
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-6 rounded-lg border border-orange-500/20">
              <Briefcase className="text-orange-400 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Domain Expertise</h3>
              <p className="text-gray-400 text-sm">
                Insurance, E-commerce, HR Tech
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
