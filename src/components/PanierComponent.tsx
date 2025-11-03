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
      whileTap={{scale:0.9,backgroundColor:"var(--color-accent)", color:"var(--color-Primary)", borderColor:"var(--color-Primary)"}}
      onClick={() => router.push("/cart")}
      className={ClassName}
    >
      <p className="text-[1.3rem]">{items.length}</p>
      <ShoppingCart className={ClassPanier} />
    </motion.button>
  );
};

export default CartSheet;


