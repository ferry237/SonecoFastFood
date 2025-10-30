"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {fadeIn} from "@/lib/Variants";

interface AutoCarouselProps {
  images: string[];
}

const AutoCarousel = ({ images }: AutoCarouselProps) => {
  const DuplicateImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden"> 
      {/* largeur ≈ 3 images (10rem * 3) */}
      <motion.div
        className="flex flex-row gap-[3rem] animate-carouseltable"
      >
        {DuplicateImages.map((src, index) => (
          <div
            key={index}
            className="relative w-[30%] h-[30rem] flex-shrink-0 "
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AutoCarousel;
