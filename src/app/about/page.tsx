"use client";

import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Code, Heart, Target } from "lucide-react";

const skills = [
  { name: "Frontend Development", level: 95 },
  { name: "Backend Development", level: 90 },
  { name: "Mobile Development", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "Cloud Architecture", level: 82 },
  { name: "DevOps", level: 80 },
];

const achievements = [
  {
    icon: Users,
    title: "500+ Happy Clients",
    description: "Successfully delivered projects for clients across the globe"
  },
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Two decades of professional software development expertise"
  },
  {
    icon: Code,
    title: "1000+ Projects",
    description: "Completed projects ranging from startups to enterprise solutions"
  }
];

export default function AboutPage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="block gradient-text font-serif">Karravula Chandra</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Passionate software developer with over 20 years of experience creating 
              exceptional digital solutions for clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                My Journey in Software Development
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  My journey in software development began over two decades ago with a simple 
                  fascination for how technology could solve real-world problems. What started 
                  as curiosity has evolved into a passionate career dedicated to creating 
                  exceptional digital experiences.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with startups, 
                  established businesses, and enterprise clients across various industries. 
                  Each project has been a learning opportunity, allowing me to refine my 
                  skills and stay at the forefront of technological innovation.
                </p>
                <p>
                  Today, I specialize in full-stack development, combining technical expertise 
                  with design sensibility to create solutions that are not only functional 
                  but also beautiful and user-friendly.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Values</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Excellence</h4>
                    <p className="text-gray-600">Committed to delivering the highest quality in every project</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Client Success</h4>
                    <p className="text-gray-600">Your success is my priority and the measure of my work</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
                    <p className="text-gray-600">Always exploring new technologies and creative solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proficient in modern technologies and frameworks, constantly learning 
              and adapting to industry trends.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                    <span className="text-blue-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Achievements & Milestones
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <div key={achievement.title} className="text-center group">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
