"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "@/lib/Variants";

interface DivImageProps {
  images?: { src: string; alt: string }[];
}

const DivImageComponent = ({ images = [] }: DivImageProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const className =
    "w-[40rem] h-[40rem] rounded-[1rem] object-cover cursor-pointer shadow-md";

  return (
    <div className="flex-1 flex flex-wrap justify-center gap-[2rem] items-center">

      {Array.isArray(images) && images.length > 0 ? (
        images.map((img, index) => (
          <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          whileHover={{ scale: 1.05 }}
           variants={fadeIn("up", 0.2)}
                       
          key={index} className="relative">
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={300}
              className={className}
              onClick={() => setSelectedImage(img.src)}
            />
          </motion.div>
        ))
      ) : (
        <p className="text-gray-500 text-center w-full">
          Aucune image disponible 📷
        </p>
      )}

      {/* Popup (lightbox) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="w-[60rem] h-[60rem] flex flex-col justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                className=" text-[var(--color-secondary)] bg-black/60 rounded-full  w-[2rem] h-[2rem] self-end hover:bg-black/80 font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="zoomed"
                width={1200}
                height={800}
                className="rounded-[1rem] shadow-2xl w-[65rem] h-[58rem] self-center"
              />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DivImageComponent;
