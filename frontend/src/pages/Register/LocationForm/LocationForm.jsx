import { useLocationForm } from "./useLocationForm";
import { TextInput } from "@components/CustomInputs/TextInput";
import { Box, Grid, MenuItem, Typography } from "@mui/material";
import { SelectInput } from "@components/CustomInputs/SelectInput";
import { UploadDocuments } from "@components/UploadDocuments/UploadDocuments";

export const LocationForm = (props) => {
  const {
    logo,
    provinces,
    cantons,
    districts,
    register,
    setValue,
    setDocument,
    handleOnChangeAddressLevel1,
    handleOnChangeAddressLevel2,
    handleOnChangeAddressLevel3,
  } = useLocationForm(props);

  return (
    <Grid container width="100%" columnSpacing={2} sx={{ paddingX: { xs: "17px", md: "98px" } }}>
      <Grid item xs={12} md={6}>
        <Grid item xs={12} pb="32px" display={{ xs: 'none', md: 'flex'}} justifyContent="left" alignItems="center">
          <img src={logo} alt="logo" style={{ width: "130px" }} />
        </Grid>
        <Grid item xs={12} pt={0} pb="23px" display="flex" justifyContent={{ xs: "center", md: "start" }} alignItems="center">
          <Typography fontSize="24px" fontWeight="bold" textAlign={{ xs: "center", md: "left" }}>
            Datos de vivienda
          </Typography>
        </Grid>
        <Grid item xs={12} pb="24px" maxWidth={{ xs: '100% !important', md: '500px !important' }}>
          <SelectInput label="Provincia" placeholder="Seleccionar" fullWidth color="secondary" {...register("province", "select")} onChange={handleOnChangeAddressLevel1}>
            {provinces?.map((province) => (
              <MenuItem key={province.id} value={province.id}>{province?.name}</MenuItem>
            ))}
          </SelectInput>
        </Grid>
        <Grid item xs={12} pb="24px" maxWidth={{ xs: '100% !important', md: '500px !important' }}>
          <SelectInput label="Cantón" placeholder="Seleccionar" fullWidth color="secondary" {...register("canton", "select")} onChange={handleOnChangeAddressLevel2}>
            {cantons?.map((canton) => (
              <MenuItem key={canton.id} value={canton.id}>{canton?.name}</MenuItem>
            ))}
          </SelectInput>
        </Grid>
        <Grid item xs={12} pb="24px" maxWidth={{ xs: '100% !important', md: '500px !important' }}>
          <SelectInput label="Distrito" placeholder="Seleccionar" fullWidth color="secondary" {...register("district", "select")} onChange={handleOnChangeAddressLevel3}>
            {districts?.map((district) => (
              <MenuItem key={district.id} value={district.id}>{district?.name}</MenuItem>
            ))}
          </SelectInput>
        </Grid>
        <Grid item xs={12} pb="24px" maxWidth={{ xs: '100% !important', md: '500px !important' }}>
          <TextInput label="Ingresos mensuales" placeholder="750000" fullWidth color="secondary" {...register("monthlyIncome", "text")} />
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item xs={12}>
          <Typography fontSize="24px" fontWeight="bold" textAlign={{ xs: "center", md: "left" }}>
            Fotografía de documento de identidad
          </Typography>
        </Grid>
        <Box display="flex" justifyContent="center" width="100%">
          <UploadDocuments setValue={setValue} setDocument={setDocument} />
        </Box>
      </Grid>
    </Grid>
  );
}