import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  FileText,
  Code,
  User,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    frontend: [
      "React.JS",
      "Next.js",
      "TypeScript",
      "Progressive Web App (PWA)",
      "Material UI",
      "Redux Toolkit",
      "SCSS",
    ],
    backend: ["Node.js", "MongoDB", "Oracle SQL", "PL/SQL"],
    tools: [
      "AWS",
      "Docker",
      "Git",
      "Postman",
      "Visual Studio Code",
      "Yarn",
      "npm",
    ],
    soft: ["Problem Solving", "Agile Methodology", "Teamwork", "Leadership"],
  };

  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Aeturnum Lanka (Pvt) Ltd",
      location: "Colombo",
      period: "December 2021 - Present",
      technologies: [
        "TypeScript",
        "Next.js",
        "ReactJS",
        "Material Design",
        "Docker",
        "Redux Toolkit",
      ],
      achievements: [
        "Collaborated on architectural design and system planning to ensure scalable and maintainable solutions",
        "Actively contributed to end-to-end feature development across the application lifecycle",
        "Participated in Proof of Concept (PoC) initiatives to evaluate and validate new technologies",
        "Developed reusable and scalable UI components, adhering to design and performance best practices",
        "Contributed to the development and optimization of PWA app for improved mobile accessibility",
        "Conducted peer code reviews to maintain code quality, consistency, and best practices",
      ],
    },
    {
      title: "Software Engineer",
      company: "Informatics International Ltd",
      location: "Colombo",
      period: "July 2019 - December 2021",
      technologies: [
        "ReactJS",
        "Redux",
        "TypeScript",
        "Material UI",
        "Oracle SQL",
        "PL/SQL",
      ],
      achievements: [
        "Collaborated with software designers to create clean and simple interactions and experiences",
        "Wrote high-quality code with best practices in React, TypeScript, and Node",
        "Handled high-performance, scalable data sets with application logics using Oracle SQL and MongoDB",
        "Initialized and executed test cases in Jest with React",
        "Involved in application deployments and server configurations to meet specific client requirements",
      ],
    },
  ];

  const ScrollToSection = ({ sectionId, children }) => (
    <button
      onClick={() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }}
      className="hover:text-blue-400 transition-colors"
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              MK
            </div>
            <div className="hidden md:flex space-x-8">
              <ScrollToSection sectionId="home">Home</ScrollToSection>
              <ScrollToSection sectionId="about">About</ScrollToSection>
              <ScrollToSection sectionId="experience">
                Experience
              </ScrollToSection>
              <ScrollToSection sectionId="skills">Skills</ScrollToSection>
              <ScrollToSection sectionId="education">Education</ScrollToSection>
              <ScrollToSection sectionId="contact">Contact</ScrollToSection>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold">
              MK
            </div>
            <h1 className="text-4xl md:text-6xl leading-tight md:leading-snug font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mahesh Kulathunga
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              Senior Software Engineer
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Passionate about developing scalable web applications with modern
              technologies. Experienced in React, TypeScript, and cloud
              technologies with a focus on creating exceptional user
              experiences.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:dhananjayam94@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a
              href="https://www.linkedin.com/in/mahesh-kulathunga-21a492147/"
              target="_blank"
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Senior Software Engineer with hands-on experience in developing,
                testing, and deploying web applications within software
                engineering and development standards.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Supportive and enthusiastic team player passionate about
                learning new technological trends and working towards
                self-development while supporting the team to grow and achieve
                organizational success.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">15+</div>
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

      {/* Experience Section */}
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
                className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">
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
              </div>
            ))}

            {/* Internship */}
            <div className="bg-slate-800/30 rounded-lg p-8 border border-slate-600 hover:border-purple-500/50 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">
                    Trainee Software Engineer (Internship)
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300 mb-2">
                    <Briefcase size={16} />
                    <span className="font-semibold">Sri Lanka Customs</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span className="text-sm">May 2017 - July 2017</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span className="text-sm">Colombo</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300">
                Involved in configuring network equipment such as routers,
                switches, and Firewalls and learned database management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold">
                Insurance
              </div>
              <div className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-3 rounded-full font-semibold">
                E-commerce
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-full font-semibold">
                HR Tech
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-blue-400" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-blue-400">
                    Master of Computer Science
                  </h3>
                  <p className="text-gray-400">(Currently Pursuing)</p>
                </div>
              </div>
              <p className="text-gray-300 mb-2">University of Colombo (UCSC)</p>
              <p className="text-gray-400 text-sm">January 2022 - Present</p>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-purple-400" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-purple-400">
                    Bachelor of Technology
                  </h3>
                  <p className="text-gray-400">
                    Computer Science And Engineering
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-2">
                Motilal Nehru NIT, Allahabad, UP, India
              </p>
              <p className="text-gray-400 text-sm">2015 - 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in hearing about new opportunities and
            interesting projects.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:dhananjayam94@gmail.com"
              className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors"
            >
              <Mail
                className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">dhananjayam94@gmail.com</p>
            </a>

            <a
              href="tel:+94711690342"
              className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-green-500/50 transition-colors"
            >
              <Phone
                className="text-green-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">+94 71 169 0342</p>
            </a>

            <a
              href="https://www.linkedin.com/in/mahesh-kulathunga-21a492147/"
              target="_blank"
              className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors"
            >
              <Linkedin
                className="text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
                size={32}
              />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:dhananjayam94@gmail.com"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Send Message
            </a>
            <a
              href="https://medium.com/@dhananjayam94"
              target="_blank"
              className="bg-transparent border border-gray-600 hover:border-purple-400 px-8 py-3 rounded-full transition-colors"
            >
              Read My Blog
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Mahesh Kulathunga. Built with React & Tailwind CSS.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/mahesh-kulathunga-21a492147/"
              target="_blank"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://medium.com/@dhananjayam94"
              target="_blank"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <FileText size={20} />
            </a>
            <a
              href="mailto:dhananjayam94@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
