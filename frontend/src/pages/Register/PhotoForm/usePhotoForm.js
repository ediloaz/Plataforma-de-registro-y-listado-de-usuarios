import { useEffect, useState } from "react";

export const usePhotoForm = ({ photo: photoParam, setPhoto }) => {
  const [open, setOpen] = useState(false);
  const [photoSrc, setPhotoSrc] = useState(null);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    if (photoParam == false) {
      setPhotoError(true);
    } else {
      setPhotoError(false);
    }
  }, [photoParam]);

  const handleClose = () => {
    setOpen(false);
  }

  const handleOpen = () => {
    setOpen(true);
  }

  const savePhoto = (photo, photoSrc) => {
    setPhoto(photo);
    setPhotoSrc(photoSrc);
    handleClose();
  }
  
  return {
    open,
    photoSrc,
    savePhoto,
    photoError,
    handleOpen,
    handleClose,
  };
}