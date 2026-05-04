import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { recentWork } from "../data/recentWork";

const RecentWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recentWork.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === recentWork.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const current = recentWork[currentIndex];

  return (
    <section id="recent-work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Recent Work
        </h2>

        <div className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden">
          {/* Carousel Container */}
          <div className="relative">
            {/* Image Section */}
            <div className="relative h-96 bg-slate-900 overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm text-gray-300">
              {currentIndex + 1} / {recentWork.length}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">
                {current.title}
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                {current.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {current.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {current.github && (
                  <a
                    href={current.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
                {current.liveLink && (
                  <a
                    href={current.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center gap-2 mt-8 pt-6 border-t border-slate-700">
              {recentWork.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-blue-400 w-8"
                      : "bg-slate-600 w-2 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
