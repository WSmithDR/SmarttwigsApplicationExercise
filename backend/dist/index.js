"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
const app_1 = __importDefault(require("./app"));
const connectDB_1 = __importDefault(require("./config/connectDB"));
const env_1 = __importDefault(require("./config/env")); // Import the config module
const port = env_1.default.port;
const mongoDB = env_1.default.mongoDB;
(0, connectDB_1.default)(mongoDB);
app_1.default.listen(port, () => console.log(`Server raised on port: http://localhost:${port}`));
