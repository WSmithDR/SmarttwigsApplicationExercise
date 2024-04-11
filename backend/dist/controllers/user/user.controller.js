"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsersController = void 0;
const getByEmail_service_1 = require("../../services/user/getByEmail.service");
const getUsersController = async (_req, res) => {
    try {
        // Call the getUsers service function to fetch users
        const users = await (0, getByEmail_service_1.getUsers)();
        // Send the users as a response
        res.status(200).json(users);
    }
    catch (error) {
        // Handle any errors
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getUsersController = getUsersController;
