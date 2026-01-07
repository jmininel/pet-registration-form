import { Checkbox } from "../../ui/checkbox"
import { Label } from "../../ui/label"

interface CheckboxFieldProps {
  id: string
  children: React.ReactNode
  className?: string
}

export function CheckBoxField({ id, children, className }: CheckboxFieldProps) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <Checkbox
        id={id}
        className="
          h-6 w-6 
          border-2 border-[#00C8B3] 
          data-[state=checked]:bg-[#00C8B3] 
          data-[state=checked]:text-black
          rounded border-none
        "
      />
      <Label htmlFor={id}>{children}</Label>
    </div>
  )
}
