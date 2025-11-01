"use client";
import { useState } from "react";
import CustomLinkComponent from "./CustomLink";
import { Menu, X } from "lucide-react";
import CartSheet from "./PanierComponent";



const HeaderComponent = () => {
  const navLinks = [
    { name: "Accueil", href: "#Accueil" },
    { name: "A propos", href: "#About" },
    { name: "Menu", href: "#Menu" },
    { name: "Contact", href: "#Contact" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="lg:fixed  top-0 left-0 w-full z-50 bg-[var(--color-primary)]/80 backdrop-blur-lg border-b-[0.05px] border-[var(--color-accent)]">
      <div className="flex w-full items-center justify-between lg:px-[6rem] px-[1.5rem] lg:h-[10rem] h-[6rem]">
        <h1 className="font-[montez] font-bold flex lg:text-[4rem] text-[2rem] text-[var(--color-secondary)]">
          SONECO <span className="text-[var(--color-accent)]">FastFood</span>
        </h1>

        <nav className="hidden lg:flex flex-1 justify-center lg:gap-[12rem] text-[1.7rem]">
          {navLinks.map((link) => (
            <CustomLinkComponent key={link.name} href={link.href}>
              {link.name}
            </CustomLinkComponent>
          ))}
        </nav>
        <CartSheet/>
        <button
          className="lg:hidden text-[var(--color-accent)]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
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
