"use client"
import CustomLinkComponent from "./CustomLink";
import { Menu } from 'lucide-react';

const HeaderComponent = () => {
  const navLinks = [
    { name: "Accueil", href: "#Accueil" },
    { name: "A propos", href: "#About" },
    { name: "Menu", href: "#Menu" },
    { name: "Contact", href: "#Contact" },
  ];
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--color-primary)]/80 backdrop-blur-lg lg:px-[6rem] px-[1.5rem] lg:h-[10rem] h-[6rem] flex items-center border-b-solid border-b-[0.05px] border-[var(--color-accent)]">
      <h1 className="lg:text-[4rem] text-[2rem] font-bold text-[var(--color-secondary)] font-[montez] flex "> SONECO <span className="text-[var(--color-accent)]">FastFood</span></h1>
        <nav className="hidden lg:flex flex-1 justify-center lg:gap-[17rem] text-[1.7rem]">
        {navLinks.map((link) => (
          <CustomLinkComponent key={link.name} href={link.href}>
            {link.name}
          </CustomLinkComponent>
        ))}
      </nav>

      {/* Bouton menu mobile */}
      <button className="lg:hidden ml-auto text-[var(--color-accent)]">
        <Menu/>
      </button>
    </header>
  );
};

export default HeaderComponent;
