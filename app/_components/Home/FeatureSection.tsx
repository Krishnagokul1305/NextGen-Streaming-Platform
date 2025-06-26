"use client";

import { motion, useAnimation } from "framer-motion"; // Import useAnimation
import { CardContent } from "@/components/ui/card";
import Image from "next/image";

// Features array
const features = [
  {
    id: 1,
    image: "/feature-1.png",
    title: "FLEXIBLE STREAMING",
    description:
      "Flexible streaming allows users to use customize their viewing experience",
    gradient: "from-[#8A2BE2] to-[#FF4500]",
  },
  {
    id: 2,
    image: "/feature-2.png",
    title: "SUPER FAST QUALITY",
    description:
      "Flexible streaming allows users to use customize their viewing experience",
    gradient: "from-[#FF00FF] to-[#FF4500]",
  },
  {
    id: 3,
    image: "/feature-3.png",
    title: "WATCH FROM ANYWHERE",
    description:
      "Flexible streaming allows users to use customize their viewing experience",
    gradient: "from-[#FF00FF] to-[#8A2BE2]",
  },
  {
    id: 4,
    image: "/feature-4.png",
    title: "DOWNLOAD AND GO",
    description:
      "Flexible streaming allows users to use customize their viewing experience",
    gradient: "from-[#8A2BE2] to-[#FF4500]",
  },
];

export default function FeatureSection() {
  const iconControlsArray = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  // Animation Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Re-added staggerChildren for one-by-one appearance
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="min-h-[80vh] space-y-16 md:py-20 pb-20 px-4 " // Added background and text color for overall section
      initial="hidden"
      whileInView="visible" // This triggers the containerVariants
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="max-w-3xl mx-auto flex items-center justify-center flex-col"
        variants={textVariants}
      >
        <p className="text-[#E57B78] italic text-sm mb-2">Platform Features</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Stream Smarter, Watch Better
        </h1>
        <p className="text-gray-300 max-w-lg text-base text-center md:text-lg">
          Discover powerful features designed to elevate your streaming
          experience from blazing-fast playback.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
        variants={containerVariants} // This parent now orchestrates staggered children
      >
        {features.map((feature, index) => {
          const handleHoverStart = () => {
            iconControlsArray[index].start({
              scale: 1.2,
              transition: { duration: 0.3 },
            });
          };

          const handleHoverEnd = () => {
            iconControlsArray[index].start({
              scale: 1,
              transition: { duration: 0.3 },
            });
          };

          return (
            <motion.div
              key={feature.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              style={{
                backgroundImage: `linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.003) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.003) 50%,
      rgba(255, 255, 255, 0.003) 75%,
      transparent 75%,
      transparent
    )`,
                backgroundSize: "30px 30px",
                backgroundBlendMode: "overlay",
              }}
              className="group relative overflow-hidden rounded-4xl bg-gray-700/50 p-6 py-10 text-white shadow-md hover:shadow-lg hover:shadow-gray-700/50 transition-all"
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
            >
              <CardContent className="text-center flex items-center flex-col justify-center space-y-4 p-0">
                <motion.div
                  animate={iconControlsArray[index]}
                  className="w-[50px] h-[50px]"
                >
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                </motion.div>
                <h3 className="text-xl font-bold uppercase">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </CardContent>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
