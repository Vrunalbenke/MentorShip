import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Checkbox as UICheckbox } from "@/components/ui/checkbox";

interface CheckboxProps {
  name: string;
  label: string;
  form: UseFormReturn<any>;
}

export function Checkbox({ name, label, form }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <UICheckbox
        id={name}
        {...form.register(name)}
        onCheckedChange={(checked) => {
          form.setValue(name, checked);
        }}
      />
      <label
        htmlFor={name}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
