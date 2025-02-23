import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  areaCode:     { type: String, required: true },
  phone:     { type: String, required: true },
  identificationType: { type: String, required: true },
  identification: { type: String, required: true },
  province: { type: String, required: true },
  canton: { type: String, required: true },
  district: { type: String, required: true },
  monthlyIncome: { type: Number, required: true },
  // Campos para el documento de identificación
  documentData: { type: Buffer },
  documentFilename: { type: String },
  documentContentType: { type: String },
  // Campos para la foto
  photoData: { type: Buffer },
  photoFilename: { type: String },
  photoContentType: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
export default User;
