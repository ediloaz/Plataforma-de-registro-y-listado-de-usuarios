import { Box, Grid, Typography } from "@mui/material";
import { TopBar } from "@components/TopBar/TopBar";
import { ListRegisters } from "@components/ListRegisters/ListRegisters";

export const List = () => {
  return (
    <Box mt="8em" width="100%" height="100%" minHeight="calc(100vh - 8em)" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
      <TopBar />
      <Grid container>
        <Grid item xs={12} px='68px' mb="50px">
          <Typography variant="h1" fontWeight={500} fontSize="24px !important" >Historial de registro</Typography>
        </Grid>
        <Grid item xs={12} px='68px'>
          <ListRegisters />
        </Grid>
      </Grid>
    </Box>
  );
}