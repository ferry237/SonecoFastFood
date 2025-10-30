"use client"
import AboutSection from "./AboutSection"
import ContactCompoment from "./ContactSection";
import HeroesComponent from "./HeroesSection"
import Menu from "./MenuSection"
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";

const MainComponent=()=>{
   useScrollSpy(["Accueil", "About", "Menu","Contact"]);
 return (
    <>
    <main className="flex flex-col items-center flex-1 justify-between pt-[10rem]">
      <HeroesComponent/>
      <AboutSection/>
      <Menu/>
      <ContactCompoment/>
    </main>
    </>
 )}

export default MainComponent
