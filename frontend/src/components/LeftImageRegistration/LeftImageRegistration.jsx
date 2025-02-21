import { Box } from "@mui/material";
import { Resources } from "@theme/Resources";

export const LeftImageRegistration = () => {
  const { backgroundTopBar, loginBackground } = Resources();

  return (
    <Box 
      width="100%" 
      height="100vh" 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      sx={{
        position: 'relative', // <-- Agregar esta línea
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: 'linear-gradient(217.64deg, #006DFF -5.84%, #5038ED 106.73%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${backgroundTopBar})`,
          backgroundRepeat: 'no-repeat',
          opacity: 0.1,
          zIndex: -1,
        },
      }}
    >
      <img src={loginBackground} alt="loginBackground" style={{ width: "100%", padding: '84px', maxWidth: '700px' }} />
    </Box>
  );
};
