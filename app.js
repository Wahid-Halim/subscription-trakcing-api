import express from "express";
import { PORT } from "./config/env.js";
const app = express();

app.get("/", (req, res) => {
  res.json({
    success: true,
    data: [],
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
