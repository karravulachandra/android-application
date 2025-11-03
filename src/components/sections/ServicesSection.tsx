"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Smartphone, 
  Palette, 
  Database, 
  Cloud, 
  Shield,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications using modern frameworks like React, Next.js, and Node.js. Responsive, fast, and SEO-optimized.",
    features: ["React & Next.js", "Node.js & Express", "TypeScript", "API Development"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android. User-friendly interfaces with seamless performance.",
    features: ["React Native", "Flutter", "iOS Development", "Android Development"],
    color: "from-green-500 to-green-600"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user experience and drive engagement. From wireframes to pixel-perfect interfaces.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side solutions with scalable architecture. Database design, API development, and system integration.",
    features: ["Database Design", "API Architecture", "Microservices", "System Integration"],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud infrastructure setup and deployment. AWS, Azure, and Google Cloud Platform expertise for scalable applications.",
    features: ["AWS & Azure", "DevOps", "CI/CD Pipelines", "Container Orchestration"],
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Shield,
    title: "Security & Performance",
    description: "Application security audits and performance optimization. Ensuring your applications are secure, fast, and reliable.",
    features: ["Security Audits", "Performance Optimization", "Code Review", "Best Practices"],
    color: "from-red-500 to-red-600"
  }
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg">Services</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Comprehensive Digital
            <span className="block gradient-text font-serif">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, I provide end-to-end development services 
            that help businesses thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Need a custom solution? Let's discuss your project requirements.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300 hover-lift"
          >
            <span>Get Custom Quote</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
