import { MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const SelectInput = ({
  name,
  control,
  children,
  loading,
  disabled,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=''
      render={({ field }) => (
        <TextField
          select
          {...field}
          {...props}
          value={children?.length > 0 ? field.value : ''}
          disabled={ disabled || ( loading || children?.length == 0) }
          title={loading ? 'Cargando...' : props?.title || ''}
          sx={{ '& div': { display: 'flex' } }}
        >
          {!children ?
            <MenuItem value="" />
            :
            children
          }
        </TextField>
      )}
    />
  );
};