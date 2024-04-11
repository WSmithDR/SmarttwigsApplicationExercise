"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../../models/user.model"));
/*export const getUsers = async (): Promise<IUser[]> => {
  try {
    const users = await User.find().populate({ path: 'games', model: 'game' }).exec()
    return users;
  } catch (error) {
    // Handle any errors here
    console.error('Error fetching users:', error);
    throw error;
  }
};*/
const getUsers = async () => {
    try {
        const users = await user_model_1.default.find({})
            .populate('games') // Poblar la lista de tareas del usuario
            .exec();
        return users;
    }
    catch (error) {
        throw new Error('Error fetching users');
    }
};
exports.getUsers = getUsers;
