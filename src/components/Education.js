import React from "react";
import { GraduationCap } from "lucide-react";
import { education } from "../data/education";

const Education = () => {
  const getColorClass = (color) => {
    const colors = {
      blue: "text-blue-400 border-blue-500/50 hover:border-blue-500/50",
      purple: "text-purple-400 border-slate-700 hover:border-purple-500/50",
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 rounded-lg p-8 border transition-colors ${getColorClass(
                edu.color,
              )}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap
                  className={`${getColorClass(edu.color)}`}
                  size={32}
                />
                <div>
                  <h3
                    className={`text-xl font-bold ${getColorClass(edu.color)}`}
                  >
                    {edu.degree}
                  </h3>
                  {edu.status && <p className="text-gray-400">{edu.status}</p>}
                  {edu.specialization && (
                    <p className="text-gray-400">{edu.specialization}</p>
                  )}
                </div>
              </div>
              <p className="text-gray-300 mb-2">{edu.institution}</p>
              <p className="text-gray-400 text-sm">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
