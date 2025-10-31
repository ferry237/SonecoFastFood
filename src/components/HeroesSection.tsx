"use client"
import MarqueeMenu from "./MarquetMenu"
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/Variants";
import { CustumButton } from "./CustumButton";
import MyStaticsData from "@/lib/data/TableData";
const HeroesComponent = () => {
   const menuItems = MyStaticsData.menuItems;
  return (
    <section id="Accueil" className="lg:px-[6rem] px-[1.5rem] w-full lg:h-[calc(100vh-10rem)]  lg:flex-row flex flex-col border-b-solid border-b-[0.1rem] border-b-[var(--color-accent)]">
      <div
       className="lg:px-4  text-center flex-1 flex flex-col justify-center items-center gap-[4rem] py-[3rem] lg:gap-[3rem]">
        <motion.h1 
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount:0.4}}
        className="text-[3.5rem] lg:text-[6rem] font-[roboto] text-[var(--color-accent)] font-bold">SONECO FASTFOOD</motion.h1>
        <motion.p 
         variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount:0.4}}
        className="lg:text-[2.5rem] text-[1.5rem] text-[var(--color-secondary)] font-[Montserrat] font-light">
          Nous vous souhaitons la bienvenu
        </motion.p>
        <MarqueeMenu items={menuItems} classNames="lg:w-[49rem] w-full text-bold  text-[var(--color-accent)] lg:text-[3rem] text-[1.5rem] font-[roboto] italic overflow-hidden flex items-center"/>
        <motion.div 
         variants={fadeIn("down", 0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount:0.4}}
        className="lg:w-[49rem] w-full flex lg:justify-end justify-center">
        <CustumButton text="Voir le menu"
         onClick={() => {
    const section = document.getElementById("Menu");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
        />
        </motion.div>
      </div>
<div className="flex-1 lg:flex justify-center items-center hidden ">
  <motion.div
  variants={{
    hidden: { scale: 0.95, opacity: 0 },
    show: {
      scale: [1, 1.05, 1], // zoom automatique
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.4 }}
  whileHover={{ scale: 1.05 }}
  className="relative w-[60rem] h-[60rem] rounded-full"
>
  <Image
    src="/burgerombre.svg"
    alt="Burger"
    fill
    className="object-contain relative z-10"
  />
  <div className="absolute inset-0 rounded-full blur-3xl bg-[var(--color-accent)] opacity-10 z-0"></div>
</motion.div>
</div>
    </section>
  )
}

export default HeroesComponent
