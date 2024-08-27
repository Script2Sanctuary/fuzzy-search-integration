import express from "express";
import { getUsers, searchUsers } from "../controllers/UserController.js";

const router = express.Router();

// Rute untuk mendapatkan semua pengguna
router.get('/users', getUsers);

// Rute untuk mencari pengguna dengan fuzzy search
router.get('/users/search', searchUsers);

export default router;
