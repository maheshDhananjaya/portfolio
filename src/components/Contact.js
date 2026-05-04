import React from "react";
import { Mail, Phone, Linkedin } from "lucide-react";
import { contactInfo, contactLinks } from "../data/contact";

const Contact = () => {
  const iconMap = {
    email: Mail,
    phone: Phone,
    linkedin: Linkedin,
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          {contactInfo.contactMessage}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactLinks.map((link, index) => {
            const Icon = iconMap[link.type];
            const colorClass =
              link.color === "blue"
                ? "hover:border-blue-500/50"
                : link.color === "green"
                  ? "hover:border-green-500/50"
                  : "hover:border-blue-500/50";

            return (
              <a
                key={index}
                href={link.href}
                target={link.type === "linkedin" ? "_blank" : undefined}
                rel={
                  link.type === "linkedin" ? "noopener noreferrer" : undefined
                }
                className={`group bg-slate-800/50 p-6 rounded-lg border border-slate-700 transition-colors ${colorClass}`}
              >
                <Icon
                  className={`mx-auto mb-4 group-hover:scale-110 transition-transform ${
                    link.color === "blue"
                      ? "text-blue-400"
                      : link.color === "green"
                        ? "text-green-400"
                        : "text-blue-400"
                  }`}
                  size={32}
                />
                <h3 className="font-semibold mb-2">{link.label}</h3>
                <p className="text-gray-400 text-sm">{link.display}</p>
              </a>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${contactInfo.email}`}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-colors"
          >
            Send Message
          </a>
          <a
            href={contactInfo.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-gray-600 hover:border-purple-400 px-8 py-3 rounded-full transition-colors"
          >
            Read My Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
