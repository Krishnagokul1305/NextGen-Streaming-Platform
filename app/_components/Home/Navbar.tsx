"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", active: true },
  { name: "Movies", active: false },
  { name: "Series", active: false },
  { name: "Kids", active: false },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="hidden md:flex py-4 items-center justify-between">
        <motion.h1
          className="text-[#E57B78] font-bold text-xl md:text-2xl tracking-wider"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          CINESTREAM
        </motion.h1>

        <motion.nav
          className="flex bg-gray-800/80 backdrop-blur-sm rounded-full p-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {navLinks.map((link, idx) => (
            <Link href={`/${link.name.toLowerCase()}`} key={idx}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
              >
                <Button
                  variant="ghost"
                  className={cn(
                    "rounded-full px-4 lg:px-6 py-2 text-sm font-medium transition-all duration-300 hover:bg-gray-700/50",
                    link.active
                      ? "bg-gray-700 text-white shadow-sm"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {link.name}
                </Button>
              </motion.div>
            </Link>
          ))}
        </motion.nav>

        <div className="flex items-center gap-4 ">
          <Link href="/signup">
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="h-9 lg:h-10 px-4 lg:px-5 cursor-pointer flex items-center justify-center rounded-full bg-[#E57B78] hover:bg-[#d96864] transition-colors duration-300 shadow-lg text-white text-sm lg:text-base font-medium"
            >
              Register
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/signin">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full bg-gray-700/90 hover:bg-gray-700 text-sm lg:text-base px-4 lg:px-6 h-9 lg:h-10"
              >
                Login
              </Button>
            </Link>
          </motion.div>
        </div>
      </header>

      <header className="md:hidden px-4 py-4 flex items-center justify-between relative z-50">
        <motion.h1
          className="text-[#E57B8] font-bold text-lg tracking-wider"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          CINESTREAM
        </motion.h1>

        <motion.button
          onClick={toggleMobileMenu}
          className="w-8 h-8 flex items-center justify-center text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 h-screen backdrop-blur-sm z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMobileMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-gray-900/95 backdrop-blur-md z-50 md:hidden shadow-2xl border-l border-gray-700/50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                  <motion.div
                    className="text-[#E57B78] text-lg font-bold tracking-wider"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    CINESTREAM
                  </motion.div>
                  <motion.button
                    onClick={toggleMobileMenu}
                    className="w-8 h-8 flex items-center justify-center text-white hover:bg-gray-700/50 rounded-full transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Simple Mobile Navigation Items */}
                <div className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <Link href={`/${link.name.toLowerCase()}`}>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start text-left text-base py-3 px-4 transition-all duration-300",
                              link.active
                                ? "text-[#E57B78] font-semibold bg-[#E57B78]/10"
                                : "text-gray-300 hover:text-white hover:bg-gray-700/30"
                            )}
                            onClick={toggleMobileMenu}
                          >
                            {link.name}
                          </Button>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Simple Mobile Auth Buttons */}
                  <div className="mt-8 space-y-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <Link href="/signup">
                        <Button
                          className="w-full bg-[#E57B78] hover:bg-[#d96864] text-white py-3 px-6 font-semibold text-base"
                          onClick={toggleMobileMenu}
                        >
                          Register
                        </Button>
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Link href="/signin">
                        <Button
                          variant="secondary"
                          className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 font-semibold text-base"
                          onClick={toggleMobileMenu}
                        >
                          Login
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <motion.div
                  className="p-6 border-t border-gray-700/50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <p className="text-gray-400 text-xs text-center">
                    © 2024 CineStream. All rights reserved.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
