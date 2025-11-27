import { Router } from "express";
const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.json({
    success: true,
    message: "sign up",
  });
});

authRouter.post("/sign-in", (req, res) => {
  res.json({
    success: true,
    message: "sign in",
  });
});

authRouter.post("/sign-out", (req, res) => {
  res.json({
    success: true,
    message: "sign out",
  });
});

export default authRouter;
