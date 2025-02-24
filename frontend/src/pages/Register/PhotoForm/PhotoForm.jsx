import { Box, Button, Grid, Typography } from "@mui/material";
import { usePhotoForm } from "./usePhotoForm";
import { CameraAltOutlined } from "@mui/icons-material";
import { CameraDialog } from "../../../components/CameraDialog/CameraDialog";

export const PhotoForm = (props) => {
  const {
    open,
    photo,
    savePhoto,
    handleOpen,
    handleClose,
  } = usePhotoForm(props);

  return (
    <Grid container width="100%" columnSpacing={2} sx={{ paddingX: { xs: "17px", md: "98px" } }}>
      <CameraDialog open={open} onClose={handleClose} savePhoto={savePhoto} />
      <Grid item xs={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        {photo ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '214px', height: '288px' }}>
            <img src={photo} alt={`profile-picture-`} style={{ borderRadius: "2px", width: '100%', maxWidth: '214px', maxHeight: '288px' }}></img>
          </Box>
        ) : (
          <CameraAltOutlined sx={{ fontSize: 100 }} />
        )}
        <Typography fontSize="24px" fontWeight="bold" textAlign="center">
          ¡Es hora de la selfie!
        </Typography>
        <Typography fontSize="16px" textAlign="center">
          Sonríe y asegúrate de tener buena iluminación.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ marginTop: 2 }} onClick={handleOpen}>
          Tomar foto
        </Button>
      </Grid>
    </Grid>
  );
}