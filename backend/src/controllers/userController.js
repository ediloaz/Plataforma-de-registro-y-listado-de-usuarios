import UserService from '../services/userService.js';

// Función para obtener todos los usuarios
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

// Función para obtener un usuario por ID
export const getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await UserService.getUserById(userId);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Función para crear un nuevo usuario
export const createUser = async (req, res, next) => {
  try {
    const userData = req.body;

    const documentFile = req.files.documentData ? req.files.documentData[0] : null;
    const photoFile = req.files.photoData ? req.files.photoData[0] : null;

    // Formatear el ingreso mensual a número
    userData.monthlyIncome = Number(userData.monthlyIncome);
    // Dato del documento
    userData.documentFilename = documentFile?.originalname;
    userData.documentContentType = documentFile?.mimetype;
    userData.documentData = documentFile?.buffer;
    // Dato de la foto
    userData.photoFilename = photoFile?.originalname;
    userData.photoContentType = photoFile?.mimetype;
    userData.photoData = photoFile?.buffer;

    const newUser = await UserService.createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

// Función para actualizar un usuario
export const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;
    const updatedUser = await UserService.updateUser(userId, updateData);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// Función para eliminar un usuario
export const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    await UserService.deleteUser(userId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
