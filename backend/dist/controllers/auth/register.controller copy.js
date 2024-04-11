"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = void 0;
const services_1 = require("../../services");
const registerController = async (req, res) => {
    try {
        // Check if username already exists
        const existingUser = await (0, services_1.getUserByUsername)(req.body.username);
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }
        // Check if email already exists using getUserByEmail
        const existingEmail = await (0, services_1.getUserByEmail)(req.body.email);
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        // If username and email are unique, create a new user
        const newUser = await (0, services_1.createUser)(req.body);
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
