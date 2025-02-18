import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const TextInput = ({
  name,
  control,
  children,
  loading,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ field }) => (
        <TextField
          {...field}
          {...props}
          value={field?.value ?? ''}
        />
      )}
    />
  );
};