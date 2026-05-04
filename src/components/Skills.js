import React from "react";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-lg border border-blue-500/30">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Frontend</h3>
            <div className="space-y-2">
              {skills.frontend.map((skill, i) => (
                <div
                  key={i}
                  className="bg-slate-700/50 px-3 py-2 rounded text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 p-6 rounded-lg border border-green-500/30">
            <h3 className="text-xl font-bold text-green-400 mb-4">Backend</h3>
            <div className="space-y-2">
              {skills.backend.map((skill, i) => (
                <div
                  key={i}
                  className="bg-slate-700/50 px-3 py-2 rounded text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 p-6 rounded-lg border border-purple-500/30">
            <h3 className="text-xl font-bold text-purple-400 mb-4">
              Tools & Cloud
            </h3>
            <div className="space-y-2">
              {skills.tools.map((skill, i) => (
                <div
                  key={i}
                  className="bg-slate-700/50 px-3 py-2 rounded text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 p-6 rounded-lg border border-orange-500/30">
            <h3 className="text-xl font-bold text-orange-400 mb-4">
              Soft Skills
            </h3>
            <div className="space-y-2">
              {skills.soft.map((skill, i) => (
                <div
                  key={i}
                  className="bg-slate-700/50 px-3 py-2 rounded text-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-slate-800/50 rounded-lg p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-center mb-8 text-purple-400">
            Domain Knowledge
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.domain.map((domain, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold"
              >
                {domain}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
