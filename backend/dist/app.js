"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const game_routes_1 = __importDefault(require("./routes/game.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.send('<h1>Welcome to my REST API!</h1>');
});
app.use('/games', game_routes_1.default);
exports.default = app;
