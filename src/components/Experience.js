import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 border transition-colors ${
                job.isInternship
                  ? "bg-slate-800/30 border-slate-600 hover:border-purple-500/50"
                  : "bg-slate-800/50 border-slate-700 hover:border-blue-500/50"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      job.isInternship ? "text-purple-400" : "text-blue-400"
                    }`}
                  >
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300 mb-2">
                    <Briefcase size={16} />
                    <span className="font-semibold">{job.company}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span className="text-sm">{job.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span className="text-sm">{job.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {job.description && (
                <p className="text-gray-300 mb-6">{job.description}</p>
              )}

              {job.achievements && (
                <div className="mb-6">
                  <h4 className="font-semibold text-purple-400 mb-3">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {job.technologies && (
                <div>
                  <h4 className="font-semibold text-green-400 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
