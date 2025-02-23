import { Grid } from "@mui/material";

import { BasicForm } from "@pages/Register/BasicForm/BasicForm";
import { LocationForm } from "@pages/Register/LocationForm/LocationForm";
import { PhotoForm } from "@pages/Register/PhotoForm/PhotoForm";

export const Steps = ({ step, setValue, setDocument, setPhoto, register }) => {

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <BasicForm register={register} />;
      case 1:
        return <LocationForm register={register} setValue={setValue} setDocument={setDocument} />;
      case 2:
        return <PhotoForm register={register} setValue={setValue} setPhoto={setPhoto} />;
      default:
        return <BasicForm register={register} />;
    }
  }

  return (
    <Grid container width="100%" minHeight="85vh" justifyContent="center" alignItems="center">
      {getStepContent(step)}
    </Grid>
  );
}