import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { useAlertMessageContext } from "@components/AlertMessage/AlertMessage";

const ACCEPTED_FILE_TYPES = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
const ACCEPTED_FILE_TYPES_MESSAGE = ACCEPTED_FILE_TYPES.join(', ');

export const useUploadDocuments = ({ setDocument }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploadingFiles, setIsUploadingFiles] = useState(false);
  const [document, _setDocument] = useState(null);

  const showAlert = useAlertMessageContext();
  
  const onDrop = useCallback((files) => {
    if (files?.length == 0) return;
    uploadDocuments(files)
  }, []);

  const uploadDocuments = (selectedFiles) => {
    if (!selectedFiles?.length) return
    setIsUploadingFiles(true)
    setDocument(selectedFiles[0])

    if (FileReader) {
      var fr = new FileReader();
      fr.onload = function () {
        _setDocument(fr.result)
      }
      fr.readAsDataURL(selectedFiles[0])
    }

    setTimeout(() => {
      showAlert('Fotografía seleccionada exitosamente', 'success')
      setIsUploadingFiles(false)
      setUploadedFiles(selectedFiles)
    }, 700);
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.bmp'],
    },
    maxFiles: 1,
    maxSize: 500 * 1024,
    multiple: false,
  });
  

  return {
    document,
    getRootProps,
    isDragActive,
    uploadedFiles,
    getInputProps,
    isUploadingFiles,
    acceptedFileTypesMessage: ACCEPTED_FILE_TYPES_MESSAGE,
  }
};
