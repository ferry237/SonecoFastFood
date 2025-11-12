"use client";
import { useState } from "react";
import { useCartStore } from "@/lib/cartStore";
import { Trash2, House, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { CustumButton } from "@/components/CustumButton";
import { useRouter } from "next/navigation";
import { LargeInput } from "@/components/InputCustum";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; 


const CartPage = () => {
  const { items, removeFromCart, clearCart, updateQuantity } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.quantity * item.prix, 0);
  const router = useRouter();

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [table, setTable] = useState(""); 
  const [emporter, setEmporter] = useState("");

  const whatsappNumber = "237693856006";

  const handleCommander = () => {
    if (!nom || !prenom ||!table ||!emporter) {
      alert("Veuillez entrer votre nom, prénom et numéro de table avant de commander.");
      return;
    }
    if (items.length === 0) {
      alert("Votre panier est vide !");
      return;
    }

    let message = `*Commande SONECO FastFood*\n\n`;
    message += `Nom: ${nom}\nPrénom: ${prenom}\nTable: ${table}\nA emporté?: ${emporter}\n\n`;
    message += `*Détails de la commande:*\n`;

    items.forEach((item) => {
      message += `- ${item.name} x${item.quantity} = ${item.prix * item.quantity} FCFA\n`;
    });

    message += `\n*Total:* ${total.toFixed(2)} FCFA\n\n`;
    message += `Merci de confirmer votre commande !`;
     
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="w-full h-full bg-[url('/BGIMGMENU.svg')] lg:py-[6rem] py-[7rem] px-[2rem] flex items-center justify-center lg:p-10">
      {/* Bouton retour à l'accueil */}
      <motion.button
        onClick={() => router.push("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9, backgroundColor: "var(--color-accent)", color: "var(--color-Primary)" }}
        className="fixed top-0 right-0 lg:w-[10rem] w-[7rem] lg:h-[10rem] h-[7rem] z-10 flex-col rounded-full 
           flex justify-center items-center border-[0.15rem] lg:text-[var(--color-accent)] text-[var(--color-secondary)]
           hover:text-[var(--color-secondary)] lg:bg-black/70 bg-black/20 hover:bg-[var(--color-accent)]/10 
           border-solid lg:border-[var(--color-secondary)] border-[var(--color-accent)] hover:border-[var(--color-accent)] cursor-pointer
           lg:mr-[6rem] mr-[2rem] lg:mt-[4rem] mt-[2rem]"
      >
        <House size={40} className="w-[3rem] h-[3rem]" />
      </motion.button>

      {/* Contenu du panier */}
      <div className="flex lg:min-w-[50rem] min-w-[100%] flex-col justify-center items-center p-[1rem] bg-black/60 rounded-[2rem] shadow-sm">
        <h1 className="lg:text-[4rem] text-[3rem] text-[var(--color-secondary)]">Votre Panier</h1>

        {items.length === 0 ? (
          <p className="text-[var(--color-accent)] text-[2rem] lg:mt-[3rem]">Votre panier est vide!!!</p>
        ) : (
          <div className="w-full flex flex-col rounded-lg p-6 gap-[2rem]">
            {/* Liste des articles */}
            <ul className="space-y-3">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex lg:flex-row flex-col justify-between lg:items-center lg:text-[2rem] text-[1.8rem] lg:gap-[3rem] gap-[1rem] text-[var(--color-secondary)] border-b border-b-[var(--color-accent)] pb-2"
                >
                  <span>{item.name}</span>
                  <div className="flex lg:gap-[3rem] justify-between items-center">
                    {/* Quantité */}
                    <div className="flex items-center gap-3">
                      <motion.button
                        whileTap={{ scale: 0.9, backgroundColor: "var(--color-accent)" }}
                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        className="p-2 rounded-full bg-[var(--color-accent)]/20 lg:hover:bg-[var(--color-accent)]/40 transition"
                      >
                        <Minus size={18} />
                      </motion.button>
                      <span className="text-[var(--color-accent)] font-bold">{item.quantity}</span>
                      <motion.button
                        whileTap={{ scale: 0.9, backgroundColor: "var(--color-accent)" }}
                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        className="p-2 rounded-full bg-[var(--color-accent)]/20 lg:hover:bg-[var(--color-accent)]/40 transition"
                      >
                        <Plus size={18} />
                      </motion.button>
                    </div>

                    <p>
                      Prix:{" "}
                      <span className="text-[var(--color-accent)]">{item.prix * item.quantity}</span> FCFA
                    </p>
                    <button onClick={() => removeFromCart(item.name)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={25} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="mt-6 flex justify-between lg:text-[2.5rem] text-[1.9rem] font-bold text-[var(--color-accent)]">
              <span>Total :</span>
              <span>{total.toFixed(2)} FCFA</span>
            </div>

            {/* Infos client */}
            <div className="flex flex-col gap-[2rem]">
              <LargeInput
                placeholder="Nom"
                value={nom}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNom(e.target.value)}
              />
              <LargeInput
                placeholder="Prenom"
                value={prenom}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrenom(e.target.value)}
              />
    
<Select value={table} onValueChange={(value) => setTable(value)}>
    <SelectTrigger className="w-full bg-black/30 border border-[var(--color-accent)] text-[1.8rem] text-[var(--color-secondary)] rounded-[1.5rem] h-[4.5rem] px-4">
      <SelectValue placeholder="-- Sélectionnez votre table --" />
    </SelectTrigger>

    {/* Définition taille max + scroll */}
    <SelectContent
      className="bg-black/90 border border-[var(--color-accent)] text-[var(--color-secondary)] max-h-[200px] overflow-y-auto rounded-[1rem]"
    >
      {Array.from({ length: 10 }, (_, i) => (
        <SelectItem
          key={i + 1}
          value={`${i + 1}`}
          className="hover:bg-[var(--color-accent)]/30 cursor-pointer text-[1.5rem]"
        >
          Table {i + 1}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>

      <Select
      value={emporter}
      onValueChange={(value) => setEmporter(value)}
    >
      <SelectTrigger className="w-full bg-black/30 border border-[var(--color-accent)] text-[1.8rem] text-[var(--color-secondary)] rounded-[1.5rem] h-[4.5rem] px-4">
        <SelectValue placeholder="Commande à emporter ?" />
      </SelectTrigger>
      <SelectContent className="bg-black/90 border border-[var(--color-accent)] text-[var(--color-secondary)] rounded-[1rem]">
        <SelectItem
          value="OUI"
          className="hover:bg-[var(--color-accent)]/30 cursor-pointer text-[1.5rem]"
        >
          OUI
        </SelectItem>
        <SelectItem
          value="NON"
          className="hover:bg-[var(--color-accent)]/30 cursor-pointer text-[1.5rem]"
        >
          NON
        </SelectItem>
      </SelectContent>
    </Select>
 
        </div>

            {/* Boutons d'action */}
            <div className="flex justify-between">
              <CustumButton onClick={clearCart} text="Vider le panier" />
              <CustumButton onClick={handleCommander} text="Commander" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
