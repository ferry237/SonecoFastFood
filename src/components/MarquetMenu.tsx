"use client"
import React from "react";
import {motion} from "framer-motion";
import { fadeIn } from "@/lib/Variants";

interface MarqueeMenuProps {
  items: string[];
  classNames: string;
}

const MarqueeMenu: React.FC<MarqueeMenuProps> = ({ items, classNames }) => {
    const duplicatedItems = [...items, ...items];
  return (
    <motion.div 
    variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount:0.4}}
    className= {classNames}>
      <ul className="flex whitespace-nowrap gap-[3rem] animate-marquee">
      {duplicatedItems.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MarqueeMenu;


