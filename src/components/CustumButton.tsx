import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

export  const CustumButton =({text, onClick ,...props}: ButtonProps)=>{
  return (
      <motion.div 
      className="rounded-[1.5rem]"
      whileTap={{scale:0.9,backgroundColor:"var(--color-accent)"}} >
        <motion.button
        whileTap={{color:"var(--color-primary)"}}
        {...props} 
        onClick={onClick}
        className="px-[1rem] hover:bg-black/40 border-solid border-[0.1rem] font-semibold border-[var(--color-accent)] rounded-[1.5rem] h-[4.5rem] lg:w-[20rem] text-[1.5rem] font-[Montserrat] text-[var(--color-secondary)]">
        {text}
        </motion.button>  
      </motion.div>
  )
}