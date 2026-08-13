import { Checkbox } from "../../ui/checkbox"
import { Label } from "../../ui/label"

interface CheckboxFieldProps {
   id: string;
   label: string;
   checked?: boolean;
   onChange?: (checked: boolean) => void;
   error?: string;
   className?: string;
}

export function CheckBoxField({
  id,
  label,
  checked = false,
  onChange,
  error,
  className,
}: CheckboxFieldProps) {
  return (
    <div className={`flex flex-col gap-1 ${className ?? ""}`}>
      <div className="flex items-center gap-3">
        <Checkbox
          id={id}
          checked={checked}
          onCheckedChange={(value) => onChange?.(value === true)}
          className="
            h-6 w-6 
            border-2 border-[#00C8B3]
            data-[state=checked]:bg-[#00C8B3]
            data-[state=checked]:text-black
            rounded
          "
        />
        <Label htmlFor={id}>{label}</Label>
      </div>

      {error && (
        <span className="text-sm text-red-500">{error}</span>
      )}
    </div>
  );
}