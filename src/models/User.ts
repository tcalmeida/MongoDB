import { Schema, model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
  nivel: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    nivel: { type: String, required: true, default: 'USER' },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>('User', userSchema);

export default User;
