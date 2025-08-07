"use client";

import { motion } from "framer-motion";
import { CheckCircle, Target, Heart, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision & Quality",
    description: "Every line of code is crafted with meticulous attention to detail and industry best practices."
  },
  {
    icon: Heart,
    title: "Client-Centric Approach",
    description: "Your success is our priority. We build lasting partnerships through exceptional service."
  },
  {
    icon: Lightbulb,
    title: "Innovation & Creativity",
    description: "Pushing boundaries with cutting-edge technologies and creative problem-solving."
  }
];

const achievements = [
  "20+ Years of Professional Experience",
  "500+ Successful Projects Delivered",
  "International Client Portfolio",
  "Award-Winning Design Excellence",
  "Full-Stack Development Expertise",
  "Agile & DevOps Methodologies"
];

export function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-lg">About Me</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
                Transforming Ideas Into
                <span className="block gradient-text font-serif">Digital Reality</span>
              </h2>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over two decades of experience in software development and design, 
              I specialize in creating exceptional digital experiences that drive business growth. 
              My passion lies in transforming complex challenges into elegant, scalable solutions.
            </p>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              From startups to enterprise-level applications, I've helped businesses across the globe 
              achieve their digital transformation goals through innovative technology solutions and 
              user-centered design principles.
            </p>

            {/* Achievements */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <a
                href="/about"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More About My Journey
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
