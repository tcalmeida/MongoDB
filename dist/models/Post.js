"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//defining the Schema object  that will be stored in the database
const postSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "User" },
    conteudo: { type: String, required: true },
}, {
    timestamps: true,
});
//defining Post model. Defining the type of Schema to be used
const Post = (0, mongoose_1.model)("Post", postSchema);
exports.default = Post;
