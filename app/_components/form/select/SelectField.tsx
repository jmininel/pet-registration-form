"use client"
import { Control, Controller, FieldValues, Path, } from "react-hook-form"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "../../ui/select";


interface SelectRootProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  placeholder?: string;
  className?: string;
  children: React.ReactNode;
}

export function SelectFieldRoot<T extends FieldValues>({
  name,
  control,
  placeholder,
  children,
  className,
}: SelectRootProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select onValueChange={field.onChange} value={field.value}>
          <SelectTrigger className={className}>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {children}
          </SelectContent>
        </Select>
      )}
    />
  );
}

interface SelectItemProps {
  value: string;
  label: string;
}

export function SelectFieldItem({ value, label }: SelectItemProps) {
  return <

    SelectItem value={value}>{label}</SelectItem>;
}

export const SelectField = {
  Root: SelectFieldRoot,
  Item: SelectFieldItem,
};