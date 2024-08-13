import React from "react";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

interface TextInputProps {
  name: string;
  placeholder: string;
  type?: string;
  form: UseFormReturn<any>;
  className?: string;
  multiline?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  name,
  placeholder,
  type = "text",
  form,
  className,
  multiline = false,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormControl>
            {multiline ? (
              <Textarea
                placeholder={placeholder}
                {...field}
                className="textarea-class"
              />
            ) : (
              <Input type={type} placeholder={placeholder} {...field} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
