"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbOptions = {
    autoCreate: true
};
// Define a function to connect to MongoDB
const connectToDB = async (dbUrl) => {
    try {
        await mongoose_1.default.connect(dbUrl, dbOptions);
        console.log('Connected to MongoDB');
    }
    catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure
    }
};
exports.default = connectToDB;
