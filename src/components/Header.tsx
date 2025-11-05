"use client";
import { useState, useEffect } from "react";
import CustomLinkComponent from "./CustomLink";
import { Menu, X } from "lucide-react";
import CartSheet from "./PanierComponent";
import { motion} from "framer-motion";
import { useCartStore } from "@/lib/cartStore"; // ✅ import du store

const HeaderComponent = () => {
  const navLinks = [
    { name: "Accueil", href: "#Accueil" },
    { name: "A propos", href: "#About" },
    { name: "Menu", href: "#Menu" },
    { name: "Contact", href: "#Contact" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const { lastAdded} = useCartStore();

  // ✅ Animation scale + rebond du panier
  const [animateCart, setAnimateCart] = useState(false);

  useEffect(() => {
    if (lastAdded > 0) {
      setAnimateCart(true);
      const timeout = setTimeout(() => setAnimateCart(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [lastAdded]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-primary)]/80 backdrop-blur-lg border-b-[0.05px] border-[var(--color-accent)]">
      <div className="flex w-full items-center justify-between lg:px-[6rem] px-[1.5rem] lg:h-[10rem] h-[6rem]">
        <h1 className="font-[montez] font-bold flex lg:text-[4rem] text-[2rem] text-[var(--color-secondary)]">
          SONECO <span className="text-[var(--color-accent)]">FastFood</span>
        </h1>

        {/* NAV Desktop */}
        <nav className="hidden lg:flex flex-1 justify-center lg:gap-[12rem] text-[1.7rem]">
          {navLinks.map((link) => (
            <CustomLinkComponent key={link.name} href={link.href}>
              {link.name}
            </CustomLinkComponent>
          ))}
        </nav>

        {/* ✅ Panier Desktop avec animation */}
        <motion.div
          animate={animateCart ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0], backgroundColor:"var(--color-accent)" } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="lg:block hidden relative"
        >
          <CartSheet
            ClassName="flex flex-col w-[6rem] h-[6rem] rounded-full 
         justify-center items-center border-[0.15rem] text-[var(--color-accent)] 
         hover:text-[var(--color-secondary)] hover:bg-[var(--color-accent)]/10
         border-solid border-[var(--color-secondary)] hover:border-[var(--color-accent)] cursor-pointer"
            ClassPanier="w-[2rem] h-[2rem]"
          />
        </motion.div>

        {/* ✅ Version mobile */}
        <div className="flex justify-center items-center gap-4">
          <motion.div
            animate={animateCart ? { scale: [1, 1.3, 1] ,rotate: [0, 10, -10, 0] } : {}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="lg:hidden relative"
          >
            <CartSheet
              ClassName="fixed top-0 right-0 lg:w-[10rem] w-[7rem] lg:h-[10rem] h-[7rem] z-10 flex-col rounded-full 
           flex justify-center items-center border-[0.15rem] text-[var(--color-secondary)] 
           hover:text-[var(--color-secondary)] hover:bg-[var(--color-accent)]/10 
            border-solid border-[var(--color-accent)] hover:border-[var(--color-accent)] cursor-pointer
           lg:mr-[6rem]  mr-[1.5rem]
            lg:mt-[4rem] mt-[7rem] bg-black/70"
              ClassPanier="w-[3rem] h-[3rem]"
            />
          </motion.div>
          <button
            className="lg:hidden text-[var(--color-accent)]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MENU mobile */}
      {mobileOpen && (
        <nav className="lg:hidden bg-[var(--color-primary)]/90 backdrop-blur-md w-full absolute top-full left-0 flex flex-col items-center gap-6 py-6 text-[1.8rem] border-t-[0.05px] border-[var(--color-accent)]">
          {navLinks.map((link) => (
            <CustomLinkComponent
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </CustomLinkComponent>
          ))}
        </nav>
      )}
    </header>
  );
};

export default HeaderComponent;
