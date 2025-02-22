import { useDropzone } from "react-dropzone";
import { useCallback, useEffect, useState } from "react";
// import { getInvoiceDocuments, uploadInvoiceDocument, deleteInvoiceDocument } from "@services/invoices.service"
import { useAlertMessageContext } from "@components/AlertMessage/AlertMessage";

const ACCEPTED_FILE_TYPES = ['.xml', '.pdf'];
const ACCEPTED_FILE_TYPES_MESSAGE = ACCEPTED_FILE_TYPES.join(', ');

export const useUploadDocuments = ({ setValue, setDocument }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploadingFiles, setIsUploadingFiles] = useState(false);
  const [isLoadingUploadedFiles, setIsLoadingUploadedFiles] = useState(false);
  const [notUploadedFiles, setNotUploadedFiles] = useState([])

  const showAlert = useAlertMessageContext();
  
  const onDrop = useCallback((files) => {
    if (files?.length == 0) return;
    setIsLoadingUploadedFiles(true)
    uploadDocuments(files)
  }, []);

  const updatedSelectedFiles = (filesResults) => {
    const newNotUploadedFilesErrorFiles = filesResults.filter(result => result.subida == false)
    setNotUploadedFiles(newNotUploadedFilesErrorFiles)
  }

  const uploadDocuments = (selectedFiles) => {
    if (!selectedFiles?.length) return
    setIsUploadingFiles(true)
    
    // const formData = new FormData();
    // selectedFiles.forEach(file => {
    //   formData.append('Documentos', new Blob([file], { type: file.type }), file.name)
    // });
    setDocument(selectedFiles?.[0])
    setTimeout(() => {
      setIsUploadingFiles(false)
      setUploadedFiles(selectedFiles)
    }, 700);
    // uploadInvoiceDocument(clave50, formData)
    // .then(respond => {
    //   updatedSelectedFiles(respond)
    //   showAlert('Documentos subidos correctamente', 'success');
    // })
    // .catch((error) => {
    //   showAlert(`Documentos no subidos (${error}`, 'error');
    // })
    // .finally(() => {
    //   setIsUploadingFiles(false);
    // });
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/xml': ['.xml'],
      'application/pdf': ['.pdf'],
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
    notUploadedFiles,
    isLoadingUploadedFiles,
    acceptedFileTypesMessage: ACCEPTED_FILE_TYPES_MESSAGE,
  }
};
