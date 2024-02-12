import User from "../models/userModel.js";

export const signup = async (req, res) => {
    const {username, email, password} = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({error: "All fields are required"});
    }

    const newUser = new User({username, email, password});

    try {
        await newUser.save();
        res.json({message: "Signup success"})
    } catch (error) {
        return res.status(400).json({error: "Email already exists"});
    }


}