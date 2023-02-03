import { Schema, model } from "mongoose";

interface IUser {
  nome: string;
  email: string;
  senha: string;
  nivel: string;
}

//defining the Schema object  that will be stored in the database
const userSchema = new Schema<IUser>(
  {
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    nivel: { type: String, required: true, default: "USER" },
  },
  {
    timestamps: true,
  }
);

//defining User model. Defining the type of Schema to be used
const User = model<IUser>("User", userSchema);

export default User;
