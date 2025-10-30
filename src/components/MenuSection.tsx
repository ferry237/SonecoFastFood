"use client"
import React from "react";
import MenuSection from "./Menus";
import AboutTitle from "./CustumTitre";
import MyStaticsData from "@/lib/data/TableData";


const Menu : React.FC = () => {
  return (
<section id="Menu" className="lg:px-[6rem] px-[1.5rem] w-full flex flex-col lg:py-[4rem] py-[3rem] gap-[3rem] justify-center items-center lg:gap-[3rem] bg-[url('/BGIMGMENU.svg')]  bg-center bg-cover">
       
       <AboutTitle Titre="NOS MENUS"/>
        <div className="flex text-bold  text-[var(--color-accent)] lg:text-[3rem] text-[3.5rem] gap-[4rem]">
          <h1 className="text-[var(--color-secondary)] lg:text-[3.5rem] text-[2rem] font-[roboto] font-extralight">NOURRITURES</h1>
        </div>
      <div className=" w-full flex flex-col gap-[4rem] ">
      <div className=" w-full flex lg:flex-row  gap-[2rem]">
          <MenuSection Caterorie={MyStaticsData.MenuData}/>
      </div>
      <div className=" w-full flex flex-col gap-[4rem] items-center border-t-solid border-t-[0.1rem] border-t-[var(--color-accent)] py-[2rem]">
         <h1 className="text-[var(--color-secondary)] lg:text-[3.5rem] text-[2rem] font-[roboto] font-extralight">BOISSONS</h1>
         <MenuSection Caterorie={MyStaticsData.Boissons}/>
      </div>
     </div>
     

    </section>
  );
}

export default Menu;