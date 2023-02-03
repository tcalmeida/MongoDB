"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    user: [{ type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "User" }],
    conteudo: { type: String, required: true },
}, {
    timestamps: true,
});
const Post = (0, mongoose_1.model)("Post", postSchema);
exports.default = Post;
