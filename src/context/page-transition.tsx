"use client";

import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0.98, scale: 0.98 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.05, ease: "easeOut" },
  },
  exit: {
    opacity: 0.98,
    scale: 1.001,
    transition: { duration: 0.02, ease: "easeIn" },
  },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}
