import { useQuery } from '@tanstack/react-query';
import axios, { handleRequestError } from '@utils/axios/axiosInstance.jsx';

const ROOT_URL = '/users/';

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
    const { data } = await axios.post(`${ROOT_URL}create`, userData);
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const editUser = async (userId, userData) => {
  try {
    const { data } = await axios.put(`${ROOT_URL}update/${userId}`, userData);
    return data;
  } catch (error) {
    handleRequestError(error);
  }
};

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
