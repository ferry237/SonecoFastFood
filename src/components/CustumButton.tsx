import { Button } from "@/components/ui/button"

interface ButtonProps {
  text?: string;
  onClick?: () => void;
}

export  const CustumButton =({text, onClick ,...props}: ButtonProps)=>{
  return (
      
        <Button
        {...props} 
        onClick={onClick}
        className="hover:bg-black/40 border-solid border-[0.1rem] font-semibold border-[var(--color-accent)] rounded-[1.5rem] h-[4.5rem] lg:w-[20rem] text-[1.5rem] font-[Montserrat] text-[var(--color-secondary)]">
        {text}
        </Button>   
  )
}