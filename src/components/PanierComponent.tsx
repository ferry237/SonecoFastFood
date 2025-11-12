"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/lib/cartStore";

interface CartSheetProps {

  ClassName?: string; 
  ClassPanier?:string;
}


const CartSheet = ({ClassName, ClassPanier}:CartSheetProps) => {
  const { items } = useCartStore();
  const router = useRouter();

  return (
    
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{scale:0.9, color:"var(--color-Primary)", borderColor:"var(--color-Primary)"}}
      onClick={() => router.push("/cart")}
      className={ClassName}
    >
      <p className=" flex justify-center items-center  text-[1.5rem] bg-[var(--color-accent)]/50 rounded-full p-2 w-[2rem] h-[2rem] ">
      <span>{items.length}</span>
      </p>
      <ShoppingCart className={ClassPanier} />
    </motion.button>
  );
};

export default CartSheet;


