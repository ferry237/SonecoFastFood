
const FooterComponent =() => {
    return (
        <footer className="w-full bg-[var(--color-primary)] flex flex-col justify-center items-center py-[4rem] gap-[1rem] border-t-solid border-t-[0.1rem] border-t-[var(--color-accent)] text-[var(--color-secondary)] text-center px-[2rem]">
             <div className="flex items-center justify-center gap-[1.2rem]">
                <div className="h-[2px] bg-[var(--color-accent)] w-[9rem] max-w-[150px]"></div>
                      <h1 className="lg:text-[4rem] text-[2rem] font-bold text-[var(--color-secondary)] font-[montez] flex "> SONECO <span className="text-[var(--color-accent)]">FastFood</span></h1>
                <div className="h-[2px] bg-[var(--color-accent)] w-[9rem] max-w-[150px]"></div>
             </div>
            <p className="lg:text-[2rem] text-[1.7rem] font-[Montserrat]">SONECO FASTFOOD, OLEMBE, YAOUNDE-CAMEROUN</p>
           <div className="flex lg:flex-row  flex-col lg:text-[2rem] text-[1.7rem] gap-[1rem] items-center">
             <p className="flex  font-[Montserrat] gap-[1rem]"> 
                <span>
                    Whatsapp:
                </span> 
                <span>
                    +237 693856006
                </span>
            </p>
            <p className="lg:block hidden text-[2rem] font-[Montserrat]">
                /
            </p>
            <p className="flex font-[Montserrat] gap-[1rem]"> 
                <span>
                    Email:
                </span> 
                <span>
                    youbiferry@gmail.com
                </span>
            </p>
           </div>
            <p>© 2025 FastFoodWebApp. All rights reserved.</p>
   
        </footer>
    )
}
export default FooterComponent