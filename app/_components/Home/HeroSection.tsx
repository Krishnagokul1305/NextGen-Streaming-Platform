"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Carousel from "./Carousel";

function HeroSection() {
  return (
    <div className="container mx-auto px-4 min-h-screen pb-12 pt-5 relative">
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
          linear-gradient(rgba(209, 193, 193, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(183, 171, 170, 0.1) 1px, transparent 1px)
        `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
      <div className="relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover the Series Streaming <br />
            Experience with{" "}
            <motion.span
              className="text-[#E57B78]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              CineStream
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-400  md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Our young and expert admins prepare amazing and trend series for you
            to watch online and priceless
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-[#E57B78] text-white font-semibold px-8 py-3 rounded-full"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get started
              </motion.span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-full"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Live
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
        <Carousel />
      </div>
    </div>
  );
}

export default HeroSection;
