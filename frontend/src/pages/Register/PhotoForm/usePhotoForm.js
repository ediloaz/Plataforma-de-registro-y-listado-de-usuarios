import { useState } from "react";

export const usePhotoForm = ({ setPhoto }) => {
  const [open, setOpen] = useState(false);
  const [photo, _setPhoto] = useState(null);

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const savePhoto = (photo) => {
    setPhoto(photo);
    _setPhoto(photo);
    handleClose();
  }
  
  return {
    open,
    photo,
    savePhoto,
    handleOpen,
    handleClose,
  };
}