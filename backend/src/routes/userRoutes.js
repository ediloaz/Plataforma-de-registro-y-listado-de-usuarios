import multer from 'multer';
import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

// Configurar multer para almacenar archivos en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware para procesar dos archivos: documentData y photoData
const cpUpload = upload.fields([
  { name: 'documentData', maxCount: 1 },
  { name: 'photoData', maxCount: 1 },
]);

router.get('/get-all', getAllUsers);
router.get('/get-by-id/:id', getUserById);
router.post('/create', cpUpload, createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;
