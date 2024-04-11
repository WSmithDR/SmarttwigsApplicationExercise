"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getUser_controller_1 = require("../controllers/user/getUser.controller");
const userRoutes = express_1.default.Router();
userRoutes.get('/users', getUser_controller_1.getUsersController);
exports.default = userRoutes;
