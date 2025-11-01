"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";


const CartSheet = () => {
  const { items } = useCartStore();
  const router = useRouter();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={() => router.push("/cart")}
      className=" flex-col lg:w-[6rem] w-[5rem] h-[6rem] rounded-full 
      flex justify-center items-center border-[0.15rem] text-[var(--color-accent)] 
      hover:text-[var(--color-secondary)] hover:bg-[var(--color-accent)]/10 lg:bg-none bg-black/60
      border-solid border-[var(--color-secondary)] hover:border-[var(--color-accent)] cursor-pointer"
    >
      <p className="text-[1.3rem]">{items.length}</p>
      <ShoppingCart className="w-[2rem] h-[2rem]" />
    </motion.button>
  );
};

export default CartSheet;


