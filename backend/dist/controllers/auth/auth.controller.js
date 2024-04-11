"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = exports.loginController = void 0;
const getByEmail_service_1 = require("../../services/user/getByEmail.service");
const jwt_utils_1 = require("../../utils/jwt.utils");
const loginController = async (req, res) => {
    try {
        // Extraer email y contraseña del cuerpo de la solicitud
        const { email, password } = req.body;
        // Verificar si el email y la contraseña se proporcionan
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required!' });
        }
        // Attempt to generate an authentication token with email and password
        const token = (0, jwt_utils_1.generateToken)(email);
        // If the token is successfully generated, respond with the token
        return res.status(200).json({ token });
    }
    catch (error) {
        // If an error occurs during the login process, respond with a generic error message
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.loginController = loginController;
const registerController = async (req, res) => {
    try {
        // Check if username already exists
        const existingUser = await (0, getByEmail_service_1.getUserByUsername)(req.body.username);
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        // Check if email already exists using getUserByEmail
        const existingEmail = await (0, getByEmail_service_1.getUserByEmail)(req.body.email);
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        // If username and email are unique, create a new user
        const newUser = await (0, getByEmail_service_1.createUser)(req.body);
        // Respond with success message and the new user data
        res.status(201).json({ message: 'User registered successfully', newUser });
    }
    catch (error) {
        // If an error occurs during the registration process, respond with a generic error message
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.registerController = registerController;
