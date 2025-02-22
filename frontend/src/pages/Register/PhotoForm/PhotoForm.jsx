import { Box, Button, Grid, MenuItem, Typography } from "@mui/material";
import { SelectInput } from "@components/CustomInputs/SelectInput";
import { usePhotoForm } from "./usePhotoForm";
import { UploadDocuments } from "@components/UploadDocuments/UploadDocuments";
import { CameraAltOutlined } from "@mui/icons-material";

export const PhotoForm = (props) => {
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
  } = usePhotoForm(props);

  return (
    <Grid container width="100%" columnSpacing={2} sx={{ paddingX: { xs: "17px", md: "98px" } }}>
      <Grid item xs={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <CameraAltOutlined sx={{ fontSize: 100 }} />
        <Typography fontSize="24px" fontWeight="bold" textAlign="center">
          ¡Es hora de la selfie!
        </Typography>
        <Typography fontSize="16px" textAlign="center">
          Sonríe y asegúrate de tener buena iluminación.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ marginTop: 2 }}>
          Tomar foto
        </Button>
        <Typography fontSize="16px" textAlign="center">
          ¿No tienes cámara? No te preocupes, puedes subir una foto.
        </Typography>
        <UploadDocuments setValue={setValue} setDocument={setDocument} />
      </Grid>
    </Grid>
  );
}