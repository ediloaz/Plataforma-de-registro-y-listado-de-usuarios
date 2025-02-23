import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { useAlertMessageContext } from "@components/AlertMessage/AlertMessage";

const ACCEPTED_FILE_TYPES = ['.xml', '.pdf', '.jpg', '.jpeg', '.png', '.gif', '.bmp'];
const ACCEPTED_FILE_TYPES_MESSAGE = ACCEPTED_FILE_TYPES.join(', ');

export const useUploadDocuments = ({ setDocument }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploadingFiles, setIsUploadingFiles] = useState(false);

  const showAlert = useAlertMessageContext();
  
  const onDrop = useCallback((files) => {
    if (files?.length == 0) return;
    uploadDocuments(files)
  }, []);

  const uploadDocuments = (selectedFiles) => {
    if (!selectedFiles?.length) return
    setIsUploadingFiles(true)
    setDocument(selectedFiles[0])

    setTimeout(() => {
      showAlert('success', 'Archivo seleccionado exitosamente')
      setIsUploadingFiles(false)
      setUploadedFiles(selectedFiles)
    }, 700);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/xml': ['.xml'],
      'application/pdf': ['.pdf'],
      'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.bmp'],
    },
    maxFiles: 1,
    maxSize: 500 * 1024,
    multiple: false,
  });
  

  return {
    getRootProps,
    isDragActive,
    uploadedFiles,
    getInputProps,
    isUploadingFiles,
    acceptedFileTypesMessage: ACCEPTED_FILE_TYPES_MESSAGE,
  }
};
