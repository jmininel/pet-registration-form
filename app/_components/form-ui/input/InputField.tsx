import { forwardRef  } from "react";
import { Input } from "../../ui/input"
import {cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/app/_lib/utils";



const inputFieldVariants = cva("", {
  variants: {
    fieldSize: {
      sm: "h-12 px-4 text-sm",
      md: "h-10 px-4 text-base",
    },
    width: {
      auto: "",
      md: "md:w-[500px]",
      full: "w-full",
    },
  },
  defaultVariants: {
    fieldSize: "md", 
    width: "md",     
  },
})

type InputFieldProps =
  React.ComponentProps<typeof Input> &
  VariantProps<typeof inputFieldVariants>

export const InputField = forwardRef<
  HTMLInputElement,
  InputFieldProps
>(({ fieldSize, width, className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      className={cn(inputFieldVariants({ fieldSize, width }), className)}
      {...props}
    />
  )
})

InputField.displayName = "InputField"