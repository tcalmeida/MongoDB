"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//defining the Schema object  that will be stored in the database
const userSchema = new mongoose_1.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    nivel: { type: String, required: true, default: "USER" },
}, {
    timestamps: true,
});
//defining User model. Defining the type of Schema to be used
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
