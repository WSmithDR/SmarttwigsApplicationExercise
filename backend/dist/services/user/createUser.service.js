"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
const bcrypt_utils_1 = require("../../utils/bcrypt.utils");
const createUser = async ({ email, username, password }) => {
    // Hash password
    const hashedPassword = await (0, bcrypt_utils_1.hashPassword)(password);
    // Create new user
    const newUser = new user_model_1.default({ email, username, password: hashedPassword });
    await newUser.save();
    // Convert Mongoose document to plain JavaScript object
    return newUser.toObject();
};
exports.createUser = createUser;
