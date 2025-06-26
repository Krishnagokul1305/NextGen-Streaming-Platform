"use client";
import { motion } from "framer-motion";

function AppearingAnimation({ children }: { children: JSX.Element }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default AppearingAnimation;
