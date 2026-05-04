import React from "react";
import { Linkedin, FileText, Mail } from "lucide-react";
import { socialLinks } from "../data/contact";

const Footer = () => {
  const iconMap = {
    linkedin: Linkedin,
    blog: FileText,
    email: Mail,
  };

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-700">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © 2025 Mahesh Kulathunga. Built with React & Tailwind CSS.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          {socialLinks.map((link, index) => {
            const Icon = iconMap[link.platform];
            const hoverColor =
              link.platform === "linkedin"
                ? "hover:text-blue-400"
                : link.platform === "blog"
                  ? "hover:text-green-400"
                  : "hover:text-purple-400";

            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${hoverColor} transition-colors`}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
