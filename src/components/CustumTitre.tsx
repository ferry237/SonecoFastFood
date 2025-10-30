"use client";
import react from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Variants";
interface TitleProps {
  Titre: string
}

const AboutTitle: react.FC<TitleProps> = ({Titre}) => {
  return (
    <div className="flex items-center justify-center w-full">
      {/* Lignes à gauche */}
      <motion.div
        className="flex flex-col justify-center items-end gap-1 flex-1 "
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="lg:h-[2px] h-[1px] bg-[var(--color-accent)] w-full max-w-[150px]"></div>
        <div className="lg:h-[2px] h-[1px] bg-[var(--color-accent)] w-full max-w-[150px]"></div>
      </motion.div>

      {/* Texte central */}
      <motion.h1
        className="mx-6 text-bold text-[var(--color-accent)] lg:text-[6rem] text-[3.5rem] font-[roboto]  text-center"
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount:0.4}}
      >
        {Titre}
      </motion.h1>

      {/* Lignes à droite */}
      <motion.div
        className="flex flex-col justify-center items-start gap-1 flex-1"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="lg:h-[2px] h-[1px] bg-[var(--color-accent)] w-full max-w-[150px]"></div>
        <div className="lg:h-[2px] h-[1px] bg-[var(--color-accent)] w-full max-w-[150px]"></div>
      </motion.div>
    </div>
  );
};

export default AboutTitle;
