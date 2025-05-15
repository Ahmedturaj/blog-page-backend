const User = require('../models/user');
const generateToken = require('../utils/generateToken');
exports.register = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({
            status: false,
            message: 'User already exists'
        });

        const user = await User.create({ email, password, name });
        return res.status(201).json({
            status: true,
            message: "User created successfully",
            user: { _id: user._id, email: user.email },
            token: generateToken(user._id)
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({
                status: false,
                message: 'Invalid credentials'
            });
        }
        return res.status(200).json({
            status: true,
            message: "Login successful",
            user: { _id: user._id, email: user.email }, token: generateToken(user._id)
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateProfile = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({
            status: false,
            message: 'User not found'
        });

        user.name = name || user.name;
        user.email = email || user.email;
        await user.save();

        return res.status(200).json({
            status: true,
            message: "Profile updated successfully",
            user: { _id: user._id, email: user.email }
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }                                                           
}   



