import { Box, Button, CircularProgress, Collapse, Divider, Tooltip, Typography } from "@mui/material";
import { useUploadDocuments } from "./useUploadDocuments";
import { PermMediaOutlined } from "@mui/icons-material";

export const UploadDocuments = (props) => {
  const {
    document,
    getRootProps,
    isDragActive,
    uploadedFiles,
    getInputProps,
    isUploadingFiles,
    acceptedFileTypesMessage,
  } = useUploadDocuments(props);

  return (
    <>
      <Tooltip arrow title={
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Typography color="inherit">Subir archivo</Typography>
        <Typography fontSize="12px" color="inherit">Clic para buscar en su computador</Typography>
        <Typography fontSize="12px" color="inherit">También se puede arrastrar y soltar los archivos.</Typography>
        <Typography fontSize="12px" color="inherit" mt={2}>Solo 1 archivo</Typography>
        <Typography fontSize="12px" color="inherit">Tamaño máximo de 500kb</Typography>
        <Typography fontSize="12px" color="inherit">Formatos permitidos: {acceptedFileTypesMessage}</Typography>
      </Box>
    }
    >
      <Box {...getRootProps()} sx={{ minHeight: '350px',  width: '100%', border: '1px dashed gray', padding: '20px', textAlign: 'center', cursor: 'pointer', mb: 4 }}>
        <input {...getInputProps()} />
        {isDragActive ?
          <Typography>Suelte aquí</Typography> :
          <Box height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">	
            {
              isUploadingFiles 
              ? <CircularProgress sx={{ width: 50, height: 50, mb: 1.2 }} />
              : 
              document ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={document} alt={`document-id-picture`} style={{ borderRadius: "2px", width: '100%', maxWidth: '214px', maxHeight: '288px' }}></img>
                </Box>
              ) : (
                <PermMediaOutlined color="secondary" sx={{ width: 50, height: 50 }} />
              )
              
            }
            <Typography sx={{ display: 'block', marginTop: '10px' }}>
              Arrastrar aquí
            </Typography>
            <Divider sx={{ width: 200 }} textAlign="center">
              o
            </Divider>
            <Button variant="contained" color="inherit" size="small" sx={{ textTransform: 'none', boxShadow: 'none', fontWeight: 'bold' }}>
              Seleccionar archivo
            </Button>
            {uploadedFiles.length > 0 &&
              <Collapse in={uploadedFiles.length > 0}>
                <Box mt={2} width="100%">
                  <Typography variant="body2" color="textSecondary" align="center">
                    Documento seleccionado: {uploadedFiles.length > 0 ? uploadedFiles[0]?.name : ''}
                  </Typography>
                </Box>
              </Collapse>
            }
          </Box>
        }
      </Box>
    </Tooltip>
    </>
  )
};

