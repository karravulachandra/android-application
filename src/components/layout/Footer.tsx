import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  ArrowUp
} from "lucide-react";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services#web-development" },
    { name: "Mobile Apps", href: "/services#mobile-apps" },
    { name: "UI/UX Design", href: "/services#ui-ux-design" },
    { name: "Consulting", href: "/services#consulting" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/karravulachandra",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/karravulachandra",
      icon: Github,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/karravulachandra",
      icon: Twitter,
    },
  ],
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">KC</span>
                </div>
                <span className="font-serif text-xl font-bold">
                  Karravula Chandra
                </span>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                Professional software development and digital solutions for international clients. 
                Delivering excellence with 20+ years of design expertise.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={18} />
                  <span>contact@karravulachandra.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={18} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={18} />
                  <span>Available Worldwide</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 sm:mb-0">
                {navigation.social.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <Icon size={24} />
                      <span className="sr-only">{item.name}</span>
                    </motion.a>
                  );
                })}
              </div>
              
              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <ArrowUp size={18} />
                <span>Back to Top</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} Karravula Chandra. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
