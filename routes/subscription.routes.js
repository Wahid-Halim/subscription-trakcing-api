import { Router } from "express";
const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => res.send("GET all subscription"));

subscriptionRouter.get("/:id", (req, res) =>
  res.send("GET subscription details")
);

subscriptionRouter.post("/", (req, res) => res.send("create subscription"));

subscriptionRouter.put("/:id", (req, res) => res.send("update subscription"));

subscriptionRouter.delete("/", (req, res) => res.send("Delete subscription"));

subscriptionRouter.get("/user/:id", (req, res) =>
  res.send("GET all user subscription")
);

subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send("cancel subscription")
);

subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send("get upcoming renewals subscription")
);

export default subscriptionRouter;
