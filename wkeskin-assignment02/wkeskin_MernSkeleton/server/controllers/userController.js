import User from '../models/userModel.js';

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new user
export const createUser = async (req, res) => {
    const { name, email, password } = req.body; // Destructure required fields
    const user = new User({ name, email, password });
    
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update user
export const updateUser = async (req, res) => {
    const { name, email, password } = req.body; // Destructure required fields
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { name, email, password }, // Ensure only relevant fields are updated
            { new: true }
        );
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete user
export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete all users
export const deleteAllUsers = async (req, res) => {
    try {
        await User.deleteMany({});
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
