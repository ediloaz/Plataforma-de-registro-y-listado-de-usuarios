import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { CameraAltOutlined, CloseOutlined, ReplayOutlined, SaveOutlined } from "@mui/icons-material";
import { Box, Button, Dialog, DialogContent, Divider, Grid, IconButton, Typography, useTheme } from "@mui/material";

export const CameraDialog = ({ open = false, onClose, savePhoto }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const theme = useTheme();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot({width: 450, height: 600});
    setImgSrc(imageSrc);
  }, [webcamRef]);
  
  const retake = () => {
    setImgSrc(null);
  };

  const handleClose = (event, reason = "") => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") onClose()
  }

  const handleSave = () => {
    savePhoto(imgSrc);
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={false} scroll="body" maxWidth="xs" PaperProps={{ sx: { overflowX: { xs: 'auto', md: 'hidden'} } }}>
      <Box position="absolute" top={0} right={0} sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>	
        <IconButton onClick={onClose}><CloseOutlined /></IconButton>
      </Box>
      <DialogContent sx={{ display: 'flex', p:0, background: '#000', justifyContent: 'center', width: 450, height: 600 }}>
        <Grid container mb={2}>
          <Grid item xs={12} >
            <Box sx={{ display: 'flex', p:0, justifyContent: 'center', width: 450, height: 600 }} >
              { imgSrc 
              ? (<img src={imgSrc} alt="webcam" />)
              : (<Webcam
                  mirrored={true}
                  audio={false}
                  width={450}
                  height={600}
                  ref={webcamRef}
                  onCutCapture={capture}
                  screenshotQuality={0.8}
                  screenshotFormat="image/jpeg"
                  videoConstraints={{
                    facingMode: { exact: "user" },
                    height: 600,
                    width: 450,
                  }}
                />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} px={2} display="flex" flexDirection="row" justifyContent={imgSrc ? "space-between" : "center"} alignItems="center" mt={ -8 } sx={{ background: theme.palette.common.white, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            {imgSrc && (
            <IconButton onClick={retake} title={'Volver a tomar'} color="secondary">
              <ReplayOutlined />
            </IconButton>)}
            <IconButton onClick={imgSrc ? retake : capture} title={imgSrc ? 'Volver a tomar' : 'Capturar'} color="secondary">
              <CameraAltOutlined sx={{ fontSize: 40 }} />
            </IconButton>
            {imgSrc && (
              <IconButton onClick={handleSave} title={'Guardar'} color="secondary">
              <SaveOutlined />
            </IconButton>)}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
