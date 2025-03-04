import { useQuery } from '@tanstack/react-query';
import axios, { handleRequestError } from '@utils/axios/axiosInstance.jsx';

const ROOT_URL = '/users/';
const HEADER_FOR_FORM_DATA = { "Content-Type": "multipart/form-data" }

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(`${ROOT_URL}get-all`);
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const getUserById = async (userId) => {
  try {
    const { data } = await axios.get(`${ROOT_URL}get-by-id/${userId}`);
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const postUser = async (userData) => {
  try {
    const { data } = await axios.post(`${ROOT_URL}create`, userData, { headers: HEADER_FOR_FORM_DATA });
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

// Estos métodos no se utilizaron, pero los dejé previstos por si se necesitan en el futuro. Igual, el Backend ya los tiene configurados.
export const editUser = async (userId, userData) => {
  try {
    const { data } = await axios.put(`${ROOT_URL}update/${userId}`, userData);
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

// Estos métodos no se utilizaron, pero los dejé previstos por si se necesitan en el futuro. Igual, el Backend ya los tiene configurados.
export const deleteUser = async (userId) => {
  try {
    const { data } = await axios.delete(`${ROOT_URL}delete/${userId}`);
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const useGetAllUsers = () => {
  return useQuery(['users'], () => getAllUsers(), { retry: true });
};

export const useGetUser = (userId) => {
  return useQuery([`user-${userId}`], () => getUserById(userId), { retry: false });
};
