"use client";
import { useCartStore } from "@/lib/cartStore";
import { Input } from "@/components/ui/input"
import { Trash2 } from "lucide-react";
import { House } from 'lucide-react';
import { motion } from "framer-motion";
import { CustumButton } from "@/components/CustumButton";
import { useRouter } from "next/navigation";
import { LargeInput } from "@/components/InputCustum";

const CartPage = () => {
  const { items, removeFromCart, clearCart } = useCartStore();
  const total = items.reduce((sum, item) => sum + (item.quantity*item.prix), 0);
  const router = useRouter();

  return (
    <section className=" w-full h-full bg-[url('/BGIMGMENU.svg')] py-[6rem] flex items-center justify-center p-10">
        <motion.button
           onClick={() => router.push("/")}
           whileHover={{ scale: 1.05 }}
           className=" absolute top-0 right-0 w-[10rem] h-[10rem] z-10 flex-col rounded-full 
           flex justify-center items-center border-[0.15rem] text-[var(--color-accent)] 
           hover:text-[var(--color-secondary)] hover:bg-[var(--color-accent)]/10 
            border-solid border-[var(--color-secondary)] hover:border-[var(--color-accent)] cursor-pointer
            mr-[6rem]
            mt-[4rem]
            ">
        <House size={40} className="w-[3rem] h-[3rem]"/>
      </motion.button>
      <div className="flex min-w-[50rem] flex-col justify-center items-center p-[1rem] bg-black/60 rounded-[2rem] shadow-sm">
             <h1 className="text-[4rem] text-[var(--color-secondary)] ">Votre Panier</h1>
    
      {items.length === 0 ? (
        <p className="text-[var(--color-accent)] text-[2rem] mt-[3rem]">Votre panier est vide.</p>
      ) : (
        <div className="w-full flex flex-col rounded-lg p-6 gap-[2rem]">
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-[2rem] gap-[3rem] text-[var(--color-secondary)] border-b border-b-[var(--color-accent)] pb-2"
              >
                <span>{item.name}</span>
                <div className="flex gap-[3rem] items-center">
                  <p> Qté:<span className="text-[var(--color-accent)]"> {item.quantity}</span></p>
                  <p> Prix: <span className="text-[var(--color-accent)]"> {item.prix*item.quantity}</span> FCFA</p>
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={25} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between text-[2.5rem] font-bold text-[var(--color-accent)]">
            <span>Total :</span>
            <span>{total.toFixed(2)} FCFA</span>
          </div>
          <div className="flex flex-col gap-[2rem]">
           <LargeInput placeholder="Nom"/>
           <LargeInput placeholder="Prenom"/>
          </div>
          <div className="flex justify-between">
                   <CustumButton onClick={clearCart} text=" Vider le panier"/>
                   <CustumButton onClick={clearCart} text="Commander"/>
          </div>  
        </div>
      )}
      </div>
    </section>
  );
};

export default CartPage;
