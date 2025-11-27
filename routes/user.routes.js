import { Router } from "express";
const userRouter = Router();

userRouter.get("/", (req, res) => res.send("GET all users"));
userRouter.post("/", (req, res) => res.send("POST a user"));
userRouter.get("/:id", (req, res) => res.send("GET a single user"));
userRouter.put("/:id", (req, res) => res.send("PATCH all users"));
userRouter.delete("/:id", (req, res) => res.send("DELETE a user"));

export default userRouter;
