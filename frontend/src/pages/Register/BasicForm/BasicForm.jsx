import { Grid, MenuItem, Typography } from "@mui/material";
import { TextInput } from "@components/CustomInputs/TextInput";
import { SelectInput } from "@components/CustomInputs/SelectInput";
import { AreaCodeInput } from "@components/CustomInputs/AreaCodeInput";
import { useBasicForm } from "./useBasicForm";

export const BasicForm = ({ register }) => {
  const { logo } = useBasicForm();

  return (
    <Grid container width="100%" px={{ xs: '17px', md: '38px', xl: '98px'  }}>
      <Grid item xs={12} pb="32px" mt={{ xs: '0', md: '100px'}} display={{ xs: 'none', md: 'flex'}} justifyContent="left" alignItems="center">
        <img src={logo} alt="logo" style={{ width: "130px" }} />
      </Grid>
      <Grid item xs={12} pt={0} pb="50px" display={{ xs: 'none', md: 'flex'}} justifyContent="left" alignItems="center">
        <Typography fontSize="24px" fontWeight="bold">
          Registro
        </Typography>
      </Grid>
      <Grid item xs={12} pb="4px">
        <TextInput label="Nombres completos" placeholder="Ingresar nombres" fullWidth color="secondary" {...register("name", "text")} />
      </Grid>
      <Grid item xs={12} pb="4px">
        <TextInput label="Apellidos" placeholder="Ingresar apellidos" fullWidth color="secondary" {...register("lastname", "text")} />
      </Grid>
      <Grid item xs={12} pb="4px">
        <TextInput label="Correo" placeholder="ejemplo@gmail.com" fullWidth color="secondary" {...register("email", "text")} />
      </Grid>
      <Grid item xs={12} pb="24px">
        <AreaCodeInput label="Código de área" color="secondary" fullWidth {...register("areaCode", "select")} />
      </Grid>
      <Grid item xs={12} pb="4px">
        <TextInput label="Número de teléfono" placeholder="0000-0000" fullWidth color="secondary" {...register("phone", "text")} />
      </Grid>
      <Grid item xs={12} pb="24px">
        <SelectInput label="Tipo de identificación" placeholder="Seleccionar" fullWidth color="secondary" {...register("identificationType", "select")}>
          <MenuItem value="cedula">Cédula</MenuItem>
          <MenuItem value="juridica">Jurídica</MenuItem>
          <MenuItem value="pasaporte">Pasaporte</MenuItem>
        </SelectInput>
      </Grid>
      <Grid item xs={12} pb="24px">
        <TextInput label="Número de identificación" placeholder="1-1234-1234" fullWidth color="secondary" {...register("identification", "text")} />
      </Grid>
    </Grid>
  );
}