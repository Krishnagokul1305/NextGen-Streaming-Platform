"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

function Subscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission here
    setEmail("");
  };
  return (
    <motion.div
      className="bg-gradient-to-r from-[#d96864] to-[#E57B78] rounded-[2rem] sm:rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-12 lg:p-16 shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Subscribe to our newspaper to stay updated with the latest news.
        </motion.h2>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <motion.p
            className="text-slate-700 text-lg sm:text-xl max-w-md italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            A film production company that specializes in creating visually
            stunning and impactful content.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex-shrink-0 w-full lg:w-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative flex items-center bg-slate-800 rounded-full p-1.5 max-w-md lg:max-w-xl shadow-lg overflow-hidden"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 1.2,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Here"
                className="flex-1 bg-transparent text-white placeholder-gray-400 px-8 py-3 focus:outline-none text-sm sm:text-base rounded-full"
                required
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  delay: 1.5,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
              />
              <motion.button
                type="submit"
                className="bg-[#E57B78] cursor-pointer text-slate-900 rounded-full p-4 hover:bg-[#d96864 ] transition-colors duration-200 shadow-md flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.4, // Appears after input text appears
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}

export default Subscribe;
