import { Variants, Transition } from "framer-motion";

export const fadeIn = (
  direction: "up" | "down" | "left" | "right",
  delay: number = 0
): Variants => {
  const transition: Transition = {
    delay,
    duration: 0.8,
    ease: "easeOut",
  };

  return {
    hidden: {
      opacity: 0,
      y: direction === "down" ? -80 : direction === "up" ? 80 : 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: [1, 1.05, 1],
      transition,
    },
  };
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // délai entre chaque item
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
