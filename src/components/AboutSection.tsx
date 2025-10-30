"use client";
import React from "react";
import DivImageComponent from "./Divimages";
import AboutTitle from "./CustumTitre";
import MyStaticsData from "@/lib/data/TableData";
import { fadeIn } from "@/lib/Variants";
import { motion } from "framer-motion";
import CarouselSpacing from "./Autocarousel";



const Text: string  = "Nous ne sommes pas qu'un simple fast-food, nous sommes le lieu de rencontre de la qualité, de la rapidité et de la convivialité. Que vous fassiez vos courses, que vous soyez en pause déjeuner, ou que vous cherchiez un dîner savoureux à emporter, notre emplacement stratégique vous offre une solution pratique et délicieuse."

const AboutSection: React.FC = () => {
  return (
<section id="About" className="lg:px-[6rem] w-full flex flex-col lg:py-[4rem] py-[3rem] gap-[2rem] justify-center items-center lg:gap-[3rem] bg-[url('/bgimage.svg')] bg-cover bg-no-repeat bg-center border-b-solid border-b-[0.1rem] border-b-[var(--color-accent)]">
        
       <AboutTitle Titre="A PROPOS" />
      <div className="flex-1 flex flex-col-reverse gap-[2rem]">
        <motion.div 
            variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount:0.4}}
        className="flex-1 h-full w-full flex justify-center items-center">
             <CarouselSpacing images={MyStaticsData.Images} />
        </motion.div>
        <div className="flex-1 flex flex-col justify-center lg:gap-[3rem] gap-[2rem] lg:py-[3rem]">
            <motion.p 
            variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount:0.4}}
            className="lg:text-[2rem] text-[1rem] font-light font-[Montserrat] text-center text-[var(--color-secondary)]">
                Sonecofast food est votre nouvelle destination gourmande et rapide, idéalement situé au premier étage du supermarché Soneco Olembé, juste après le carrefour Coeur Ouvert.
            </motion.p>
            <motion.p 
            variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount:0.4}}
            className="lg:text-[1.9rem] text-[1rem] font-light font-[Montserrat] text-center text-[var(--color-secondary)]">
                {Text}
            </motion.p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;