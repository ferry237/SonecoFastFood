import { Input as ShadcnInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const LargeInput = ({ className, ...props }: React.ComponentProps<typeof ShadcnInput>) => {
  return (
    <ShadcnInput
      className={cn("rounded-[1.5rem] w-full h-[4.5rem] !text-[1.5rem] text-[var(--color-secondary)] border border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]", className)}
      {...props}
    />
  );
};
