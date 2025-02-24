import * as yup from "yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userModel } from "@models/user.model";
import { postUser } from "@services/users.service";
import { yupResolver } from '@hookform/resolvers/yup';
import { useCustomRegister } from "@hooks/useCustomRegister";
import { useAlertMessageContext } from "@components/AlertMessage/AlertMessage";
import { getCantonName, getDistrictName, getProvinceName } from "@helpers/locations";

const ENV = import.meta.env.VITE_API_ENV;

export const useRegister = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [document, setDocument] = useState(null);
  const [photo, setPhoto] = useState(null);

  const navigate = useNavigate();
  const showAlert = useAlertMessageContext();
  
  const schema = yup.object({
    name: yup.string().required('El nombre es requerido'),
    lastname: yup.string().required('El apellido es requerido'),
    email: yup.string().required('El correo electrónico es requerido').email('Formato de correo electrónico inválido'),
    areaCode: yup.string().required('El código de área es requerido'),
    phone: yup.string().required('El teléfono es requerido'),
    identificationType: yup.string().required('El tipo de identificación es requerido'),
    identification: yup.string().required('La identificación es requerida'),
    province: yup.string().required('La provincia es requerida'),
    canton: yup.string().required('El cantón es requerido'),
    district: yup.string().required('El distrito es requerido'),
    monthlyIncome: yup.number().required('El ingreso mensual es requerido').min(0, 'El ingreso mensual debe ser mayor a 0').typeError('El ingreso mensual debe ser un número'),
  });

  const formValues = {
    defaultValue: userModel,
    resolver: yupResolver(schema),
    mode: 'onTouched'
  }
  
  const { register, formState: { errors }, control, watch, handleSubmit, setValue, getValues, setError, reset } = useForm(formValues);

  const onSubmit = (data) => {
    setLoading(true)
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('lastname', data.lastname);
    formData.append('email', data.email);
    formData.append('areaCode', data.areaCode);
    formData.append('phone', data.phone);
    formData.append('identificationType', data.identificationType);
    formData.append('identification', data.identification);
    formData.append('province', getProvinceName(data.province));
    formData.append('canton', getCantonName(data.province, data.canton));
    formData.append('district', getDistrictName(data.province, data.canton, data.district));
    formData.append('monthlyIncome', data.monthlyIncome);

    if (document) {
      formData.append('documentData', document, document.name);
    } else {
      showAlert('Debe seleccionar un documento', 'error')
      setLoading(false)
      return;
    }

    if (photo) {
      formData.append('photoData', photo, photo.name);
    } else {
      showAlert('Debe seleccionar una foto', 'error')
      setLoading(false)
      return;
    }

    postUser(formData)
    .then((response) => {
      console.log(response)
      showAlert('Usuario creado correctamente', 'success')
      navigate("/List");
    })
    .catch((error) => {
      console.error(error)
      showAlert(`Error al crear el usuario: ${error}`, 'error')
    })
    .finally(() => {
      setLoading(false)
    })    
  }

  const checkFieldValuesForFirstStep = () => {
    const values = getValues();
    const fields = ['name', 'lastname', 'email', 'areaCode', 'phone', 'identificationType', 'identification'];
    let isValid = true;
    fields.forEach(field => {
      if (values[field] == '' || values[field] == null) {
        isValid = false;
        setError(field, { type: 'required', message: 'Este campo es requerido' });
      }
    });

    return isValid;
  }

  const checkFieldValuesForSecondStep = () => {
    const values = getValues();
    const fields = ['province', 'canton', 'district', 'monthlyIncome'];
    let isValid = true;
    fields.forEach(field => {
      if (values[field] == '' || values[field] == null) {
        isValid = false;
        setError(field, { type: 'required', message: 'Este campo es requerido' });
      }
    });

    if (document == null) {
      setDocument(false);
      isValid = false;
    }

    return isValid;
  }

  const checkFieldValuesForThirdStep = () => {
    if (photo == null) {
      setPhoto(false);
      return false;
    }

    return true;
  }

  const onNextStep = () => {
    if (step === 2) {
      return;
    }

    if (step == 0) {
      if (!checkFieldValuesForFirstStep()) {
        showAlert('Complete los campos faltantes', 'warning')
        return;
      }
    }

    if (step == 1) {
      if (!checkFieldValuesForSecondStep()) {
        showAlert('Complete los campos faltantes', 'warning')
        return;
      }
    }

    if (step == 2) {
      if (!checkFieldValuesForThirdStep()) {
        showAlert('Complete los campos faltantes', 'warning')
        return;
      }
    }

    setStep(step + 1);
  }

  const onPreviousStep = () => {
    if (step === 0) {
      return;
    }
    setStep(step - 1);
  }

  const onRestartSteps = () => {
    setStep(0);
    reset();
  }

  const onAutoComplete = () => {
    setValue('name', 'Nombre');
    setValue('lastname', 'Apellido');
    setValue('email', `correo${Math.random()}@gmail.com`);
    setValue('areaCode', 'CR');
    setValue('phone', '12345678');
    setValue('identificationType', 'Cédula');
    setValue('identification', '123456789');
    setValue('province', '1');
    setValue('canton', '1');
    setValue('district', '1');
    setValue('monthlyIncome', '1000');
  }

  useEffect(() => {
    if (ENV !== 'production') {
      window.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.shiftKey && event.key === 'P') {
          onAutoComplete();
        }
      });
    }
  }, []);

  return {
    step,
    photo,
    loading,
    document,
    setValue,
    setPhoto,
    onNextStep,
    setDocument,
    onPreviousStep,
    onRestartSteps,
    register: useCustomRegister(register, errors, control, setValue, watch),
    handleSubmit: handleSubmit(onSubmit),
  };
}