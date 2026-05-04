const ScrollToSection = ({ sectionId, children }) => (
  <button
    onClick={() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }}
    className="hover:text-blue-400 transition-colors"
  >
    {children}
  </button>
);

const Navigation = ({ isScrolled }) => {
  return (
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
            <ScrollToSection sectionId="experience">Experience</ScrollToSection>
            <ScrollToSection sectionId="skills">Skills</ScrollToSection>
            <ScrollToSection sectionId="recent-work">
              Recent Work
            </ScrollToSection>
            <ScrollToSection sectionId="education">Education</ScrollToSection>
            <ScrollToSection sectionId="contact">Contact</ScrollToSection>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navigation, ScrollToSection };
