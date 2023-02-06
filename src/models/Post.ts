import { Schema, model, Types } from "mongoose";

interface IPost {
  user: Types.ObjectId; // Types for acessing ObejetcId
  conteudo: string;
}

//defining the Schema object  that will be stored in the database
const postSchema = new Schema<IPost>(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },  // ref: to make reference to User model. To populate function works 
    conteudo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//defining Post model. Defining the type of Schema to be used
const Post = model<IPost>("Post", postSchema);

export default Post;
