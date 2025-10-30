"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay"; // ✅ import du plugin autoplay
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface CarouselImage {
  src: string;
  alt?: string;
}

interface CarouselWithLightboxProps {
  images: CarouselImage[];
}

const CarouselSpacing = ({ images }: CarouselWithLightboxProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative w-full flex justify-center items-center">
      <Carousel
        className="w-[95%]"
        plugins={[
          Autoplay({
            delay: 3000, // ⏱ délai entre chaque défilement (en ms)
            stopOnInteraction: false, // 🚫 ne pas arrêter si on clique ou survole
          }),
        ]}
        opts={{
          loop: true, // 🔁 pour faire défiler en boucle
        }}
      >
        <CarouselContent className="-ml-1">
          {images.map((img, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 shadow-none">
              <div className="p-1">
                <Card className="border-none shadow-md">
                  <CardContent className="flex aspect-square items-center justify-center p-2">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="relative w-[90%] h-[95%] cursor-pointer"
                      onClick={() => setSelectedImage(img.src)}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt || `Image ${index + 1}`}
                        fill
                        className="object-cover rounded-xl"
                      />
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* === Popup (lightbox) === */}
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
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="text-[var(--color-secondary)] bg-black/60 rounded-full w-[2rem] h-[2rem] self-end hover:bg-black/80 font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="zoomed"
                width={1200}
                height={800}
                className="rounded-[1rem] shadow-2xl w-[65rem] h-[58rem] self-center object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarouselSpacing;
