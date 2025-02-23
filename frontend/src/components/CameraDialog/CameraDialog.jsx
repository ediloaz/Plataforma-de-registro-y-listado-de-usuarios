import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { CloseOutlined } from "@mui/icons-material";
import { Box, Button, Dialog, DialogContent, Divider, Grid, IconButton, Typography } from "@mui/material";

export const CameraDialog = ({ open = false, onClose, maxWidth= 'lg' }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);
  
  const retake = () => {
    setImgSrc(null);
  };

  const handleClose = (event, reason = "") => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={maxWidth} scroll="body" >
        <Box position="absolute" top={0} right={0}>	
          <IconButton onClick={onClose}><CloseOutlined /></IconButton>
        </Box>
      <DialogContent sx={{ px: { xs: 2, md: 5 } }}>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={4}>
          {imgSrc ? (
            <img src={imgSrc} alt="webcam" />
              ) : (
            <Webcam
              mirrored={true}
              audio={false}
              height={600}
              width={600}
              ref={webcamRef} 
              screenshotFormat="image/jpeg"
              videoConstraints={{
                facingMode: "front",
              }}
            />
              )}
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="btn-container">
              <Button onClick={imgSrc ? retake : capture}>{imgSrc ? 'Volver a tomar' : 'Capturar'}</Button>
            </div>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}
