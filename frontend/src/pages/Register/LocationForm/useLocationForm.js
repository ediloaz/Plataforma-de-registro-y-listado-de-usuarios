import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useCustomRegister } from "@hooks/useCustomRegister";
import { userModel } from "@models/user.model";
import { useState } from "react";

export const useLocationForm = () => {
  const [loading, setLoading] = useState(false);
  
  const schema = yup.object({
    name: yup.string().required('El nombre es requerido'),
    lastname: yup.string().required('El apellido es requerido'),
    email: yup.string().required('El correo electrónico es requerido').email('Formato de correo electrónico inválido'),
    phone: yup.string().required('El teléfono es requerido'),
    identificationType: yup.string().required('El tipo de identificación es requerido'),
    identification: yup.string().required('La identificación es requerida'),
    province: yup.string().required('La provincia es requerida'),
    canton: yup.string().required('El cantón es requerido'),
    district: yup.string().required('El distrito es requerido'),
    monthlyIncome: yup.string().required('El ingreso mensual es requerido'),
    documenIdFile: yup.string().required('El archivo de identificación es requerido'),
    photoFile: yup.string().required('El archivo de foto es requerido'),
  });

  const formValues = {
    defaultValue: userModel,
    resolver: yupResolver(schema),
    mode: 'onTouched'
  }
  
  const { register, formState: { errors }, control, watch, handleSubmit, setValue } = useForm(formValues);

  const onSubmit = (data) => {
    setLoading(true)
    console.log(data)

  }

  return {
    register: useCustomRegister(register, errors, control, setValue, watch),
    handleSubmit: handleSubmit(onSubmit),
    loading,
  };
}