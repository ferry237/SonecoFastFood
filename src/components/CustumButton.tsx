import { Button } from "@/components/ui/button"

interface ButtonProps {
  text?: string;
}

export  const CustumButton =({text}: ButtonProps)=>{
  return (
      
        <Button className="border-solid border-[0.1rem] font-semibold border-[var(--color-accent)] rounded-[1.5rem] h-[4.5rem] w-[20rem] text-[1.5rem] font-[Montserrat] text-[var(--color-secondary)]">
        {text}
        </Button>   
  )
}