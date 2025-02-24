import { Box, Dialog, DialogContent, Divider, Grid, IconButton, Typography } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

export const ProfileDialog = ({ user, open = false, onClose, maxWidth= 'md' }) => {
  const handleClose = (event, reason = "") => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") onClose()
  }

  const photoData = user?.photoData?.data;
  const base64PhotoImage = btoa(String.fromCharCode(...new Uint8Array(photoData)));
  const photoSrc = `data:${user?.photoContentType};base64,${base64PhotoImage}`
  const documentData = user?.documentData?.data;
  const base64DocumentImage = btoa(String.fromCharCode(...new Uint8Array(documentData)));
  const docSrc = `data:${user?.documentContentType};base64,${base64DocumentImage}`;

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={maxWidth} scroll="body" >
      <Box position="absolute" top={0} right={0}>	
        <IconButton onClick={onClose}><CloseOutlined /></IconButton>
      </Box>
      <DialogContent sx={{ px: { xs: 2, md: 5 } }}>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '214px', height: '288px' }}>
              <img src={photoSrc} alt={`profile-picture-${user?.name}`} style={{ borderRadius: "2px", width: '100%', maxWidth: '214px', maxHeight: '288px' }}></img>
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
              <img src={docSrc} alt={`id-document-file-${user?.identification}`} style={{ borderRadius: "2px", width: '100%', maxWidth: '214px', maxHeight: '288px' }}></img>
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