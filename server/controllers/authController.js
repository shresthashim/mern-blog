import bcryptjs from "bcryptjs";
import User from "../models/userModel.js";
export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({error: "All fields are required"});
    }

    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({username, email, password: hashPassword});

    try {
        await newUser.save();
        res.json({message: "Signup success"})
    } catch (error) {
        next(error);
    }


}