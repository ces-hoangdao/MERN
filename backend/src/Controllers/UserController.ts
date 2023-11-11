import { Request, Response } from "express";

const getListUser = (req: Request, res: Response) => {
  res.send("list user");
};

const getUser = (req: Request, res: Response) => {
  res.send("get user");
};

const UserController = {
  getListUser,
  getUser,
};
export default UserController;
