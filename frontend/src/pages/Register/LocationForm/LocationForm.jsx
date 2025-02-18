import { Box, Grid, Menu, MenuItem, TextField } from "@mui/material";
import { RegisterTopBar } from "@components/RegisterTopBar/RegisterTopBar";
import { RegisterTitle } from "@components/RegisterTitle/RegisterTitle";
import { TextInput } from "@components/CustomInputs/TextInput";
import { SelectInput } from "@components/CustomInputs/SelectInput";
import { AreaCodeInput } from "@components/CustomInputs/AreaCodeInput";
import { useLocationForm } from "./useLocationForm";

export const LocationForm = () => {
  const {
    register,
    handleSubmit,
    loading,
  } = useLocationForm();

  return (
    <Grid container width="100%" px="17px">
      <Grid item xs={12} md={6}>
        <Grid item xs={12} pb="24px">
          <SelectInput label="Provincia" placeholder="Seleccionar" fullWidth color="secondary" {...register("phone", "select")}>
            <MenuItem value="sj">San José</MenuItem>
          </SelectInput>
        </Grid>
        <Grid item xs={12} pb="24px">
          <SelectInput label="Cantón" placeholder="Seleccionar" fullWidth color="secondary" {...register("phone", "select")}>
            <MenuItem value="sj">Puriscal</MenuItem>
          </SelectInput>
        </Grid>
        <Grid item xs={12} pb="24px">
          <SelectInput label="Distrito" placeholder="Seleccionar" fullWidth color="secondary" {...register("phone", "select")}>
            <MenuItem value="sj">Santiago</MenuItem>
          </SelectInput>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center" width="100%">
          Espacio para documento
        </Box>
      </Grid>
    </Grid>
  );
}