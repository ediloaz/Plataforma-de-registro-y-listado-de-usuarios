import { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userModel } from "@models/user.model";
import { postUser } from "@services/users.service";
import { yupResolver } from '@hookform/resolvers/yup';
import { useCustomRegister } from "@hooks/useCustomRegister";
import { useAlertMessageContext } from "@components/AlertMessage/AlertMessage";

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
    monthlyIncome: yup.string().required('El ingreso mensual es requerido'),
    // documenIdFile: yup.string().required('El archivo de identificación es requerido'),
    // photoFile: yup.string().required('El archivo de foto es requerido'),
    /*
    MEJORARLO CON ESTO:
    telefono: yup.object().shape({
        codigoDeArea: yup.string().required(t('validation.required')),
        numero: yup.string().required(t('validation.required')).test(
            'is-number',
            t('validation.phoneNumber'),
            value => !isNaN(value)
        ),
        descripcion: yup.string().max(255, t('validation.max').replace('${max}', '255'))
    }),
    correoElectronico: yup.string().required(t('validation.required')).email(t('validation.email')),
    direccion: yup.object().shape({
        nivel1: yup.string().required(t('validation.required')),
        nivel2: yup.string().required(t('validation.required')),
        nivel3: yup.string().required(t('validation.required')),
        otrasSeñales: yup.string().max(255, t('validation.max').replace('${max}', '255'))
    }),
    */
  });

  const formValues = {
    defaultValue: userModel,
    resolver: yupResolver(schema),
    mode: 'onTouched'
  }
  
  const { register, formState: { errors }, control, watch, handleSubmit, setValue, getValues, setError, reset } = useForm(formValues);

  const onSubmit = (data) => {
    setLoading(true)
    console.log(data)

    postUser(data)
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
    setValue('email', 'correo@gmail.com');
    setValue('areaCode', 'CR');
    setValue('phone', '12345678');
    setValue('identificationType', 'cedula');
    setValue('identification', '123456789');
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

  console.log('watch', watch())

  return {
    step,
    loading,
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