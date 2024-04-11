"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJwt = exports.authenticateLocal = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const passport_local_1 = require("passport-local");
const user_model_1 = __importDefault(require("../models/user.model"));
const getByEmail_service_1 = require("../services/user/getByEmail.service");
const jwtSecret = 'your_jwt_secret'; // Reemplaza con tu secreto JWT real
passport_1.default.use(new passport_local_1.Strategy(async (email, password, done) => {
    try {
        const user = await (0, getByEmail_service_1.getUserByEmail)(email);
        if (!user) {
            return done(null, false, { message: 'Incorrect username' });
        }
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (isMatch) {
            return done(null, user);
        }
        else {
            return done(null, false, { message: 'Incorrect password' });
        }
    }
    catch (error) {
        console.log(error);
        return done(error);
    }
}));
passport_1.default.use(new passport_jwt_1.Strategy({
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret
}, async (jwtPayload, done) => {
    try {
        const user = await user_model_1.default.findById(jwtPayload.id);
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    }
    catch (error) {
        return done(error);
    }
}));
exports.authenticateLocal = passport_1.default.authenticate('local', { session: false });
exports.authenticateJwt = passport_1.default.authenticate('jwt', { session: false });
