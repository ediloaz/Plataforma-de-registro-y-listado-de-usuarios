import { Box, Grid, MenuItem, Typography } from "@mui/material";
import { SelectInput } from "@components/CustomInputs/SelectInput";
import { useLocationForm } from "./useLocationForm";
import { UploadDocuments } from "@components/UploadDocuments/UploadDocuments";

export const LocationForm = (props) => {
  const {
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
        <Grid item xs={12}>
          <Typography fontSize="24px" fontWeight="bold">
            Datos de vivienda
          </Typography>
        </Grid>
        <Grid item xs={12} pb="24px" maxWidth="500px !important">
          <SelectInput label="Provincia" placeholder="Seleccionar" fullWidth color="secondary" {...register("province", "select")} onChange={handleOnChangeAddressLevel1}>
            {provinces?.map((province) => (
              <MenuItem key={province.id} value={province.id}>{province?.name}</MenuItem>
            ))}
          </SelectInput>
        </Grid>
        <Grid item xs={12} pb="24px" maxWidth="500px !important">
          <SelectInput label="Cantón" placeholder="Seleccionar" fullWidth color="secondary" {...register("canton", "select")} onChange={handleOnChangeAddressLevel2}>
            {cantons?.map((canton) => (
              <MenuItem key={canton.id} value={canton.id}>{canton?.name}</MenuItem>
            ))}
          </SelectInput>
        </Grid>
        <Grid item xs={12} pb="24px" maxWidth="500px !important">
          <SelectInput label="Distrito" placeholder="Seleccionar" fullWidth color="secondary" {...register("district", "select")} onChange={handleOnChangeAddressLevel3}>
            {districts?.map((district) => (
              <MenuItem key={district.id} value={district.id}>{district?.name}</MenuItem>
            ))}
          </SelectInput>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid item xs={12}>
          <Typography fontSize="24px" fontWeight="bold">
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