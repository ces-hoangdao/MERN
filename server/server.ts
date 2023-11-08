import express, { Express, Request, Response } from "express";
import { connectDB } from "./src/Services/ConnectDb";
import userRouter from "./src/Router/UserRouter";

const app: Express = express();

// Connect to the database (Mongoose)
connectDB();

// Middleware router
app.use("/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
