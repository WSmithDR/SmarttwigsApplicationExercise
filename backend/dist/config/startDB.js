"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectDB_1 = __importDefault(require("./connectDB"));
const env_1 = __importDefault(require("./env"));
const mongoDB = env_1.default.mongoDB;
const startDB = async () => {
    try {
        await (0, connectDB_1.default)(mongoDB);
        console.log('Mongodb is connected!!!');
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = startDB;
