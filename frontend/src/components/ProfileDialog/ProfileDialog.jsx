import { useEffect, useState } from "react";
import { CloseOutlined } from "@mui/icons-material";
import { getUserById } from "@services/users.service";
import { Box, Dialog, DialogContent, Divider, Grid, IconButton, Typography } from "@mui/material";

export const ProfileDialog = ({ user, open = false, onClose, maxWidth= 'md' }) => {
  const [photoSrc, setPhotoSrc] = useState(null);
  const [docSrc, setDocSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClose = (event, reason = "") => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") onClose()
  }

  useEffect(() => {
    if (user && user?._id) {
      getUserById(user._id)
        .then((data) => {
          const photoData = data?.photoData?.data;
          const base64PhotoImage = btoa(String.fromCharCode(...new Uint8Array(photoData)));
          const photoSrc = `data:${data?.photoContentType};base64,${base64PhotoImage}`;
          setPhotoSrc(photoData ? photoSrc : null);
          const documentData = data?.documentData?.data;
          const base64DocumentImage = btoa(String.fromCharCode(...new Uint8Array(documentData)));
          const docSrc = `data:${data?.documentContentType};base64,${base64DocumentImage}`;
          setDocSrc(documentData ? docSrc : null);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [user])

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={maxWidth} scroll="body" >
      <Box position="absolute" top={0} right={0}>	
        <IconButton onClick={onClose}><CloseOutlined /></IconButton>
      </Box>
      <DialogContent sx={{ px: { xs: 2, md: 5 } }}>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '214px', height: '288px' }}>
              {photoSrc 
              ? <img src={photoSrc} alt={`profile-picture-${user?.name}`} style={{ borderRadius: "2px", width: '100%', maxWidth: '214px', maxHeight: '288px' }} /> 
              : null}
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography fontSize={20} fontWeight={600}>{user?.name}</Typography>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} md={6}>
                <InfoField label="Correo electrónico" value={user?.email} />
                <InfoField label="Número de teléfono" value={user?.phone} />
                <InfoField label="Tipo de documento" value={user?.identificationType} />
                <InfoField label="Número de document" value={user?.identification} />
              </Grid>
              <Grid item xs={12} md={6}>
                <InfoField label="Provincia" value={user?.province} />
                <InfoField label="Cantón" value={user?.canton} />
                <InfoField label="Distrito" value={user?.district} />
                <InfoField label="Ingresos mensuales" value={user?.monthlyIncome} />
              </Grid>
              <Grid item xs={12} md={6}>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} color="#667085">
            <Typography fontSize={16} fontWeight={600}>Documento de identidad</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '214px', height: '134px' }}>
            {docSrc 
            ? <img src={docSrc} alt={`id-document-file-${user?.identification}`} style={{ borderRadius: "2px", width: '100%', maxWidth: '214px', maxHeight: '288px' }}></img> 
            : null}
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

const InfoField = ({ label, value }) => {
  return (
    <Grid container mb={1.5}>
      <Grid item xs={12} sx={{ color: '#101828' }}>
        <Typography fontSize={14} fontWeight={400}>{label}</Typography>
      </Grid>
      <Grid item xs={12} sx={{ color: '#667085' }}>
        <Typography fontSize={14} fontWeight={400}>{value}</Typography>
      </Grid>
    </Grid>
  )
}