import { Box, Button, Grid, Typography } from "@mui/material";
import { usePhotoForm } from "./usePhotoForm";
import { CameraAltOutlined } from "@mui/icons-material";
import { CameraDialog } from "../../../components/CameraDialog/CameraDialog";

export const PhotoForm = (props) => {
  const {
    open,
    logo,
    photoSrc,
    savePhoto,
    photoError,
    handleOpen,
    handleClose,
  } = usePhotoForm(props);

  return (
    <Grid container width="100%" columnSpacing={2} sx={{ paddingX: { xs: "17px", md: "98px" } }}>
      <CameraDialog open={open} onClose={handleClose} savePhoto={savePhoto} />
      <Grid item xs={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <img src={logo} alt="logo" style={{ width: "130px" }} />
        {photoSrc ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '214px', height: '288px', mt: 4 }}>
            <img src={photoSrc} alt={`profile-picture-`} style={{ borderRadius: "2px", width: '100%', maxWidth: '214px', maxHeight: '288px' }}></img>
          </Box>
        ) : (
          <CameraAltOutlined sx={{ fontSize: 70, mt: 4 }} color="action"  />
        )}
        <Typography fontSize="22px" fontWeight="bold" textAlign="center" mt={2}>
          ¡Es hora de la selfie!
        </Typography>
        <Typography fontSize="16px" textAlign="center" mt={2}>
          Sonríe y asegúrate de tener buena iluminación.
        </Typography>
        {photoError && <Typography color="error">Debe cargar la foto</Typography>}
        <Button variant="contained" color="primary" size="large" sx={{ marginTop: 4 }} onClick={handleOpen}>
          Tomar foto
        </Button>
      </Grid>
    </Grid>
  );
}