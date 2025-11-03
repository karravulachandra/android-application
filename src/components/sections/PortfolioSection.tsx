"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "A full-featured e-commerce platform with advanced inventory management, payment processing, and analytics dashboard.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Healthcare Management System",
    category: "Enterprise Software",
    description: "Comprehensive healthcare management system for hospitals with patient records, appointment scheduling, and billing.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile Application",
    description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial analytics.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "Firebase", "Biometrics", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 4,
    title: "Real Estate Platform",
    category: "Web Application",
    description: "Modern real estate platform with property listings, virtual tours, and integrated CRM for agents.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Learning Management System",
    category: "Educational Platform",
    description: "Interactive learning platform with video streaming, progress tracking, and collaborative tools for educators.",
    image: "/api/placeholder/600/400",
    technologies: ["Angular", "Express.js", "PostgreSQL", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "IoT Dashboard",
    category: "Data Visualization",
    description: "Real-time IoT dashboard for monitoring industrial equipment with predictive analytics and alerts.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "D3.js", "InfluxDB", "MQTT"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export function PortfolioSection() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg">Portfolio</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Featured
            <span className="block gradient-text font-serif">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing some of my recent work across various industries and technologies. 
            Each project represents a unique challenge solved with innovative solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-gray-200 aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-gray-500 text-lg font-medium">Project Preview</div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Github className="w-5 h-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <ExternalLink className="w-6 h-6 text-blue-600" />
              </div>
              
              <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h4>
              
              <p className="text-gray-600 text-sm mb-3">
                {project.description.substring(0, 100)}...
              </p>
              
              <span className="text-blue-600 text-xs font-medium uppercase tracking-wide">
                {project.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/portfolio"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 hover-lift"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
