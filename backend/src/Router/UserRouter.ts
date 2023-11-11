import express from "express";
import UserController from "../Controllers/UserController";
const userRouter = express.Router();

userRouter.get("/", UserController.getListUser);
userRouter.get("/:id", UserController.getUser);

export default userRouter;
