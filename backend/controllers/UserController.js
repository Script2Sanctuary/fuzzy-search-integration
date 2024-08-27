import User from "../models/UserModel.js";
import { Op } from "sequelize";

// Fungsi untuk mendapatkan semua pengguna
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Fungsi untuk mencari pengguna dengan fuzzy search
export const searchUsers = async (req, res) => {
    try {
        const { term } = req.query;
        if (!term) {
            return res.status(400).json({ message: "Search term is required" });
        }

        const users = await User.findAll({
            where: {
                name: {
                    [Op.like]: `%${term}%`
                }
            }
        });

        res.status(200).json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
