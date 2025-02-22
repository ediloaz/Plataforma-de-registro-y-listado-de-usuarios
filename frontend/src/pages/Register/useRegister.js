import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userModel } from "@models/user.model";
import { postUser } from "@services/users.service";
import { yupResolver } from '@hookform/resolvers/yup';
import { useCustomRegister } from "@hooks/useCustomRegister";
import { useAlertMessageContext } from "@components/AlertMessage/AlertMessage";

export const useRegister = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

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
    // province: yup.string().required('La provincia es requerida'),
    // canton: yup.string().required('El cantón es requerido'),
    // district: yup.string().required('El distrito es requerido'),
    // monthlyIncome: yup.string().required('El ingreso mensual es requerido'),
    // documenIdFile: yup.string().required('El archivo de identificación es requerido'),
    // photoFile: yup.string().required('El archivo de foto es requerido'),
  });

  const formValues = {
    defaultValue: userModel,
    resolver: yupResolver(schema),
    mode: 'onTouched'
  }
  
  const { register, formState: { errors }, control, watch, handleSubmit, setValue, getValues, setError } = useForm(formValues);

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
  }

  return {
    step,
    loading,
    onNextStep,
    onPreviousStep,
    onRestartSteps,
    register: useCustomRegister(register, errors, control, setValue, watch),
    handleSubmit: handleSubmit(onSubmit),
  };
}