"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const subscribeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className=" text-white relative overflow-hidden">
      <div className="absolute inset-0 " />
      <div className="relative z-10 p-3 md:p-0">
        <motion.div
          variants={subscribeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative  mb-8"
        ></motion.div>

        {/* Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="pb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">CINESTREAM</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md">
                A film production company that specializes in creating visually
                stunning and impactful content.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                {[
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-lime-400 transition-colors duration-200"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Menu Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">MENU</h4>
              <ul className="space-y-3">
                {["help", "services", "company"].map((item, index) => (
                  <motion.li key={item}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-lime-400 transition-colors duration-200 capitalize text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">
                BUSINESS
              </h4>
              <ul className="space-y-3">
                {["Movie", "Web Series", "Pay TV"].map((item, index) => (
                  <motion.li key={item}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-lime-400 transition-colors duration-200 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">
                INVESTORS
              </h4>
              <ul className="space-y-3">
                {["Annual Report", "Stocks", "Financial"].map((item, index) => (
                  <motion.li key={item}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-lime-400 transition-colors duration-200 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-gray-700 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm text-center">
              © 2024 Copy Right - CINEFILM
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
