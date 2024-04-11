"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersController = void 0;
const services_1 = require("../../services");
const getUsersController = async (_req, res) => {
    try {
        // Call the getUsers service function to fetch users
        const users = await (0, services_1.getUsers)();
        // Send the users as a response
        return res.status(200).json(users);
    }
    catch (error) {
        // Handle any errors
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getUsersController = getUsersController;
