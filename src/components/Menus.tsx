"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@/lib/Variants";
import { itemVariants } from "@/lib/Variants";
import { containerVariants } from "@/lib/Variants";
import { useCartStore } from "@/lib/cartStore";
import Image from "next/image";

interface MenuItem {
  name: string;
  prix: number;
}

interface MenuCategory {
  type: string;
  image: string;
  items: MenuItem[];
}

interface TypeDeMenuProps {
  Caterorie: MenuCategory[];
}

const MenuContentComponent: React.FC<TypeDeMenuProps> = ({ Caterorie }) => {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
   const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="flex flex-wrap gap-[2rem] items-center justify-center w-full overflow-x-hidden px-[1rem] py-[2rem]">
      {Caterorie.map((menu, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          whileHover={{ scale: 1.05 }}
          variants={fadeIn("left", 0.2)}
          className="w-[90vw] sm:w-[30rem] md:w-[35rem] lg:w-[40rem] rounded-[2rem] gap-[0.5rem] cursor-pointer shadow-md shadow-amber-50/5 flex flex-col items-center py-[1rem] "
          onClick={() => setSelectedMenu(menu.type)}
        >
          <div className="w-full h-[35rem] sm:h-[38rem] lg:h-[40rem] flex justify-center items-center">
            <Image
              src={menu.image}
              alt={menu.type}
              width={500}
              height={300}
              className="w-[80%] h-[80%] object-contain"
            />
          </div>
          <h2 className="text-[var(--color-accent)] text-[1.8rem] sm:text-[2rem] font-[Roboto] text-center">
            {menu.type}
          </h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedMenu && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-[1rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMenu(null)}
          >
            <motion.div
              className="flex flex-col bg-black/70 rounded-[2rem] p-[2rem] gap-[2rem] overflow-y-auto max-h-[85vh] w-[90vw] sm:w-[80vw] lg:w-[70rem] shadow-2xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-[var(--color-secondary)] text-[1.5rem] hover:scale-110 transition"
                onClick={() => setSelectedMenu(null)}
              >
                ✕
              </button>

              {Caterorie.filter((menu) => menu.type === selectedMenu).map(
                (menu, index) => (
                  <div key={index} className="flex w-full flex-col gap-[1rem]">
                    <h2 className="text-[var(--color-accent)] lg:text-[3rem] text-[2rem] font-[Roboto] mb-[1rem] text-center">
                      {menu.type}
                    </h2>

                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="flex flex-col"
                    >
                      {menu.items.map((item, i) => (
                        <motion.p
                          key={i} 
                          onClick={() => addToCart({ name: item.name, prix: item.prix })} 
                          variants={itemVariants}
                          className="flex flex-col cursor-pointer rounded-[1rem] hover:bg-amber-50/10 sm:flex-row sm:justify-between sm:items-center justify-center text-[var(--color-secondary)] lg:text-[2rem] text-[1.3rem] border-b border-white/20 py-3 px-2 font-[Montserrat]"
                        >
                          <span>{item.name}</span>
                          <span className="text-[var(--color-accent)] font-semibold">
                            {item.prix} FCFA
                          </span>
                        </motion.p>
                      ))}
                    </motion.div>
                  </div>
                )
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuContentComponent;
