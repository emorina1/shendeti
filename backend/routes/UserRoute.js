import express from "express";
import{
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/User.js";
import { verifyUser , adminOnly} from "../middleware/AuthUser.js";

const router =express.Router();

// UserRoute.js
router.get('/users',verifyUser,adminOnly, getUsers);
router.get('/users/:id',verifyUser,adminOnly, getUserById);
router.post('/users',verifyUser, adminOnly,createUser);
router.patch('/users/:id',verifyUser,adminOnly, updateUser);
router.delete('/users/:id', verifyUser,adminOnly,deleteUser);



export default router;