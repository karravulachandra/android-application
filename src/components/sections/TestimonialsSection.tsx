"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    image: "/api/placeholder/80/80",
    rating: 5,
    content: "Karravula delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and professional approach made the entire process seamless. Our sales increased by 300% within the first quarter!",
    project: "E-Commerce Platform"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, HealthTech Solutions",
    company: "HealthTech Solutions",
    image: "/api/placeholder/80/80",
    rating: 5,
    content: "Working with Karravula was a game-changer for our healthcare management system. The technical expertise and innovative solutions provided have streamlined our operations significantly. Highly recommended!",
    project: "Healthcare Management System"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager, FinanceApp",
    company: "FinanceApp",
    image: "/api/placeholder/80/80",
    rating: 5,
    content: "The mobile banking app developed by Karravula is outstanding. The security features and user experience are top-notch. Our customers love the intuitive interface and seamless functionality.",
    project: "Mobile Banking App"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder, EduLearn",
    company: "EduLearn",
    image: "/api/placeholder/80/80",
    rating: 5,
    content: "Karravula transformed our vision into a powerful learning management system. The platform's scalability and feature-rich interface have helped us serve thousands of students effectively.",
    project: "Learning Management System"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Director, PropTech Ventures",
    company: "PropTech Ventures",
    image: "/api/placeholder/80/80",
    rating: 5,
    content: "The real estate platform exceeded all our requirements. Karravula's expertise in both frontend and backend development resulted in a robust, scalable solution that our agents love using.",
    project: "Real Estate Platform"
  }
];

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
          <span className="text-blue-600 font-semibold text-lg">Testimonials</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            What Clients
            <span className="block gradient-text font-serif">Say About Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what some of my amazing clients 
            have to say about working together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-12 relative"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                {/* Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                  "{testimonials[activeTestimonial].content}"
                </blockquote>

                {/* Project */}
                <div className="text-blue-600 font-semibold mb-2">
                  Project: {testimonials[activeTestimonial].project}
                </div>
              </div>

              {/* Client Info */}
              <div className="text-center lg:text-left">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center">
                  <div className="text-gray-500 text-sm font-medium">Photo</div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[activeTestimonial].name}
                </h4>
                <p className="text-gray-600 mb-1">
                  {testimonials[activeTestimonial].role}
                </p>
                <p className="text-blue-600 font-medium">
                  {testimonials[activeTestimonial].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Navigation */}
          <div className="flex flex-wrap justify-center gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  index === activeTestimonial
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-50 shadow-md"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <div className="text-gray-500 text-xs">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="text-left hidden sm:block">
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs opacity-75">{testimonial.company}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 text-center"
          >
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
