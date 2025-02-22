import User from '../models/userModel.js';

const getAllUsers = async () => {
  return await User.find();
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const createUser = async (data) => {
  const newUser = new User(data);
  return await newUser.save();
};

const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
